import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtention'
})
export class FileExtentionPipe implements PipeTransform {

  transform(file_name: string): string | undefined {
    return file_name?.split('.')?.pop();
  }

}
