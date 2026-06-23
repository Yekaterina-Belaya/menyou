import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHeight',
})
export class FormatHeightPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
