import { Pipe, PipeTransform } from '@angular/core';

class EllipsisProp {
  digit: number;
  symbol: string;
}

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, prop: EllipsisProp): any {
    console.log(value, prop);
    let _symbol = '...';
    let _digit = 5;
    if (!value) {
      return _symbol;
    }
    if (!prop) {
      return value;
    } else {
      if (prop.symbol) {
        _symbol = prop.symbol;
      }
      if (prop.digit) {
        _digit = prop.digit;
      }
      if (value.length < _digit) {
        return value;
      } else {
        let _value = value.substring(0, _digit);
        return _value + _symbol
      }
    }
  }

}
