import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, shape: string): string {
    return 'Shape of planter:' + shape;
  }

}
