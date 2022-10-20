import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 public transform(value: any,filteredString:string) {
    if(!value || value==undefined || !value.displayName || value.length===0 || filteredString===''){
      return value;
    }
    const result=[];
    for(let val of value){
      if( (val.displayName.toLowerCase()).includes(filteredString.toLowerCase())){
          result.push(val);
      }
    }
    return result;
  }
}