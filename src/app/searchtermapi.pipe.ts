import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtermapi',
  standalone: true,
})
export class SearchtermapiPipe implements PipeTransform {
  transform(data: any[], searchterm: string): any[] {
    if (!data || !searchterm) {
      return data;
    }
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchterm.toLocaleLowerCase())
    );
  }
}
