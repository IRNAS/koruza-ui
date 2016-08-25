import {Pipe, PipeTransform} from '@angular/core';

/**
 * A pipe which transforms the input value from mW to dBm.
 */
@Pipe({name: 'dbm'})
export class DbmPipe implements PipeTransform {
  public transform(value: number): number {
    let valueDbm = 10 * Math.log10(value);
    if (valueDbm < -40)
      valueDbm = -40;

    return Number.parseFloat(valueDbm.toFixed(2));
  }
}
