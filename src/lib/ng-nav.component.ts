import {Component, OnInit} from '@angular/core';
import {NgNavService} from './ng-nav.service';
import {map} from 'rxjs/operators';
import {MenuItemConfig} from './models/MenuItemConfig';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ng-nav',
  templateUrl: `ng-nav.component.html`,
  styleUrls: ['ng-nav.component.css']
})
export class NgNavComponent implements OnInit {
  public menuItems: MenuItemConfig[] = [];
  public defaultBorderBottom = '1px solid #dfdfdf';
  public defaultMinHeight = '60px';
  public defaultBackground = 'transparent';
  isMyParent = false;
  siblings = [];

  constructor(private ngNavService: NgNavService) {
  }

  ngOnInit() {
    this.ngNavService.getConfig().pipe(
      map(data => {
        data.map(item => this.menuItems.push(item));
      })).subscribe(items => {
    });
  }

  openItem(item: MenuItemConfig, parent: MenuItemConfig) {
    this.isMyParent = false;
    item.openedItem = !item.openedItem;
    this.closeOtherOpenedItem(item);
    if (parent != null) {
      this.closeSibLing(item, parent);
    }
    if (!item.openedItem) {
      this.closeSubItems(item);
    }
  }

  closeSubItems(item) {
    if (!item.openedItem) {
      if (item.children != null) {
        item.children.map(child => {
          child.openedItem = false;
          this.closeSubItems(child);
        });
      }
    }
  }

  closeOtherOpenedItem(item: MenuItemConfig) {
    this.menuItems.map(it => {
      if (it.itemId !== item.itemId && !this.isItemParentOfSubItem(it, item)) {
        it.openedItem = false;
        this.closeSubItems(it);
      }
    });
  }

  closeSibLing(item: MenuItemConfig, parent: MenuItemConfig) {
    const element = document.getElementById(item.itemId);
    const l_parent = element.parentNode;
    const ancestor = l_parent.parentNode;
    const htmlSiblings = [];
    if (ancestor != null && ancestor.nodeName === 'LI') {
      for (let i = 0; i < l_parent.children.length; i++) {
        htmlSiblings.push(l_parent.children[i]);
      }
    }
    if (htmlSiblings.length > 0) {
      const siblingsIds = [];
      htmlSiblings.map(sibling => {
        if (sibling.id !== item.itemId) {
          siblingsIds.push(sibling.id);
        }
      });
      if (siblingsIds != null) {
        const siblings = this.findSiblings(this.menuItems, siblingsIds);
        if (siblings.length > 0) {
          siblings.map(sib => {
            if (sib.itemId !== item.itemId) {
              sib.openedItem = false;
              this.closeChildren(sib, item);
            }
          });
        }
      }
    }
    parent.openedItem = true;
  }
  closeChildren(sibling: MenuItemConfig, item: MenuItemConfig) {
    if (sibling.children != null) {
      sibling.children.map(child => {
        if (child.itemId !== item.itemId) {
          child.openedItem = false;
          this.closeChildren(child, item);
        }
      });
    }
  }
  findSiblings(items: MenuItemConfig[], siblingsIds: string[]): MenuItemConfig [] {
    items.map(it => {
      if (siblingsIds.includes(it.itemId)) {
        this.siblings.push(it);
      }
      if (it.children != null) {
        return this.findSiblings(it.children, siblingsIds);
      }
    });
    return this.siblings;
  }

  isItemParentOfSubItem(item: MenuItemConfig, child: MenuItemConfig): boolean {
    if (item.children != null) {
      item.children.map(subItem => {
        if (subItem.itemId === child.itemId) {
          this.isMyParent = true;
          return;
        }
        return this.isItemParentOfSubItem(subItem, child);
      });
    }
    return this.isMyParent;
  }

  setStyles(item) {
    const styles = {
      'background': item.backgroundColor != null ? item.backgroundColor : this.defaultBackground,
      'border-bottom': item.borderBottom != null ? item.borderBottom : this.defaultBorderBottom,
      'min-height': item.minHeight != null ? item.minHeight : this.defaultMinHeight
    };
    return styles;
  }


}
