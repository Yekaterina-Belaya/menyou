import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '@shared/constants/currencies';

@Pipe({
  name: 'formatPrice',
  standalone: true,
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number, currency: Currency): string {

    switch (currency) {

      case Currency.Rub:
        return new Intl.NumberFormat('ru-RU')
          .format(value)
          .replace(/\s/g, "'") + ' руб.';

      case Currency.Usd:
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(value);

      case Currency.Eur:
        return new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
          maximumFractionDigits: 0,
        }).format(value);

      default:
        return value.toString();
    }

  }

}
