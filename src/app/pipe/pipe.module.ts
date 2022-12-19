import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitStringPipe } from './split-string.pipe';
import { FormatCustomSelectOptionListPipe } from './FormatCustomSelectOptionList/format-custom-select-option-list.pipe';
import { FormatBytesPipe } from './format-bytes/format-bytes.pipe';
import { FileExtentionPipe } from './file-extention/file-extention.pipe';

const components = [SplitStringPipe, FormatCustomSelectOptionListPipe, FormatBytesPipe, FileExtentionPipe];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipeModule { }
