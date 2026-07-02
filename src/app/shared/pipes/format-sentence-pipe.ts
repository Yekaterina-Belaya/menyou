import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSentence',
  standalone: true,
})
export class FormatSentencePipe implements PipeTransform {

  transform(value: string | null | undefined): string {

    if (!value) {
      return '';
    }

    let text = value.trim();

    text =
      text.charAt(0).toUpperCase() +
      text.slice(1).toLowerCase();

    if (!text.endsWith('.')) {
      text += '.';
    }

    return text;

  }

}
