import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any) {
    if (value.length > 16) {
      return value.substr(0, 16) + '...';
    }
    else {
      return value;
    }
  }
}
