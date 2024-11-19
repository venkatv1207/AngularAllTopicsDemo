import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipeDemo',
  standalone: true,
})
export class NewpipeDemoPipe implements PipeTransform {
  transform(p: any, demo: string): any {
    if (p.age > 22) {
      return `Hello man ${p.name} ${demo}`;
    } else {
      return `Hello below aged ${p.name} ${demo}`;
    }
  }
}
