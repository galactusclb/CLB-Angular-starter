import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString',
})
export class SplitStringPipe implements PipeTransform {
  transform(value: string, params: string = ','): string {
    const words = value?.split(params);

    for (var i = 0; i < words.length; i++) {
      words[i] = words[i]?.charAt(0).toUpperCase() + words[i]?.substr(1);
    }

    return words.join(' ');
  }
}
