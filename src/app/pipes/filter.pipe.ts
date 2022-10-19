import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 public transform(value: any,filteredString:string) {
    if(value.length===0 || filteredString===''){
      return value;
    }

    const result=[];
    for(let val of value){
      if( (val.toLowerCase()).includes(filteredString.toLowerCase()) && result.length<7){
          result.push(val);
      }
    }
    return result;
  }
}