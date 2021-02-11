import {Inject, Injectable} from '@angular/core';
import {MenuItemConfig} from './models/MenuItemConfig';
import {NgLibConfigService} from './ng-nav.module';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgNavService {

  constructor(@Inject(NgLibConfigService) private config: MenuItemConfig[]) {
    console.log(config);
  }

  getConfig(): Observable<MenuItemConfig[]> {
    return of(this.config);
  }

  getLeftIcon(index: number): string {
    return this.config[index].leftIcon;
  }

  getItemText(index: number): string {
    return this.config[index].itemText;
  }

  isOpenedItem(index: number): boolean {
    return this.config[index].openedItem;
  }

  getChildren(index: number): MenuItemConfig[] {
    return this.config[index].children;
  }

  getItemClass(index: number): string {
    return this.config[index].itemClass;
  }

  getItemPath(index: number): string {
    return this.config[index].itemPath;
  }

  isHidden(index: number): boolean {
    return this.config[index].hidden;
  }
}
