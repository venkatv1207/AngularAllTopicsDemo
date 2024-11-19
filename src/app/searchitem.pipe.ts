import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchitem',
  standalone: true,
})
export class SearchitemPipe implements PipeTransform {
  transform(item: string[], searchterm: string): string[] {
    if (!item || !searchterm) {
      return item;
    }
    return item.filter((data) =>
      data.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())
    );
  }
}
