import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatWeight',
})
export class FormatWeightPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
