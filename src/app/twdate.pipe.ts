import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twdate'
})
export class TwdatePipe implements PipeTransform {

  transform(date:Date): string {
    const year = date.getFullYear() -1911;
    const month = date.getMonth()+1;
    const day = date.getDate();
    return `民國${year}年${month}月${day}日`;
  }

}
