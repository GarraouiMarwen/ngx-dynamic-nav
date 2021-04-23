import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'menuFilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.hidden === false);
  }

}
