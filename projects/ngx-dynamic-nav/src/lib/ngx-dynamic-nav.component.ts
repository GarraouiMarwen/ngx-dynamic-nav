import {Component, Input, OnInit} from '@angular/core';
import {MenuItemConfig} from './models/MenuItemConfig';
import {ThemeConfig} from './utils/ThemeConfig';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-dynamic-nav',
  template: `<div id="navbarResponsive" class="menu-panel h-100 ">
  <div class="menu-content">
    <div class="menu">
      <ul class="navbar-nav main-menu">
        <li *ngFor="let item of menuItems | menuFilter:{hidden: true};"
            [class]="item.itemClass" [id]="item.itemId"
            [ngStyle]="setStyles(item)">
          <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"  [ngStyle]="setLinkStyles()"
             (click)="openItem(item, undefined)">
            <span class="icon margin-left margin-right"><fa-icon [icon]="item.leftIcon"></fa-icon></span>
            <span class="link-menu">{{item.itemText}}</span>
            <span class="chevron-right" *ngIf="item.children!=null">
                        <fa-icon icon="chevron-right" [class.rotate-fa-icon]="item.openedItem"></fa-icon>
            </span>
          </a>
          <ul class="sub-main-menu" *ngIf="item.children != null && item.children.length >0"
              [ngStyle]="item.openedItem ? {'display' : 'block'}:{'display' : 'none'}">
            <ng-container *ngTemplateOutlet="recursiveListTmpl; context:{ item: item }"></ng-container>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <ng-template #recursiveListTmpl let-item="item">
    <li *ngFor="let subItem of item.children"
        [id]="subItem.itemId" [ngStyle]="setStyles(subItem)">
      <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger item-sub-main-menu" (click)="openItem(subItem, item)"
         [ngStyle]="setLinkStyles()">
        <span class="icon margin-right" [ngStyle]="{'padding-left' : subItem.paddingLeft != null ? subItem.paddingLeft : '0px'}">
          <fa-icon [icon]="subItem.leftIcon"></fa-icon>
        </span>
        <span class="link-menu">{{subItem.itemText}} </span>
        <span class="chevron-right" *ngIf="subItem.children!=null">
              <fa-icon icon="chevron-right" [class.rotate-fa-icon]="subItem.openedItem"></fa-icon>
        </span>
      </a>
      <ul *ngIf="subItem.children != null && subItem.children.length >0" class="sub-main-menu-second-level"
          [ngStyle]="subItem.openedItem ? {'display' : 'block'}:{'display' : 'none'}">
        <ng-container
          *ngTemplateOutlet="recursiveListTmpl; context:{ item: subItem }"
        ></ng-container>
      </ul>
    </li>
  </ng-template>
</div>
`,
  styleUrls: ['ngx-dynamic-nav.component.css']
})
export class NgxDynamicNavComponent implements OnInit {
  @Input()
  public menuItems: MenuItemConfig[] = [];
  @Input()
  public config: string;
  public defaultBorderBottom = '1px solid #dfdfdf';
  public defaultMinHeight = '60px';
  public defaultBackground = 'transparent';
  isMyParent = false;
  siblings = [];
  defaultTheme = 'dark';
  themeConfig: ThemeConfig = new ThemeConfig();
  constructor() {
  }

  ngOnInit() {
    this.defaultTheme = this.config ? this.config : this.defaultTheme;
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
    let styles = {};
    switch (this.defaultTheme) {
      case 'dark':
        styles = {
          'background': this.themeConfig.darkTheme.backgroundColor,
          'border-bottom': this.themeConfig.darkTheme.borderBottom,
          'min-height': this.themeConfig.darkTheme.itemHeight,
          'border-top': item.borderTop ? item.borderTop : ''
        };
        break;
      case 'light':
        styles = {
          'background': this.themeConfig.lightTheme.backgroundColor,
          'border-bottom': this.themeConfig.lightTheme.borderBottom,
          'min-height': this.themeConfig.lightTheme.itemHeight,
          'border-top': item.borderTop ? item.borderTop : ''
        };
        break;
      default:
        styles = {
          'background': item.backgroundColor != null ? item.backgroundColor : this.defaultBackground,
          'border-bottom': item.borderBottom != null ? item.borderBottom : this.defaultBorderBottom,
          'min-height': item.minHeight != null ? item.minHeight : this.defaultMinHeight,
        };
    }
    return styles;
  }
  setLinkStyles() {
    let styles = {};
    switch (this.defaultTheme) {
      case 'dark':
        styles = {
          'color': this.themeConfig.darkTheme.itemTextColor,
        };
        break;
      case 'light':
        styles = {
          'color': this.themeConfig.lightTheme.itemTextColor,
        };
        break;
      default:
        styles = {
          'color': this.themeConfig.darkTheme.itemTextColor,
        };
    }
    return styles;
  }
}
