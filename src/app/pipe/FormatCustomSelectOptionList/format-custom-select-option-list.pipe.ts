import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCustomSelectOptionList',
})
export class FormatCustomSelectOptionListPipe implements PipeTransform {
  transform(
    list: any[],
    option_title: string | number,
    option_value: any
  ): { title: string | number; value: any }[] {

    return list?.map((option, index) => {

      return {
        title: option?.[option_title],
        value: option?.[option_value]
      }
    })
  }
}
