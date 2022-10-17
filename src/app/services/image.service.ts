import { Injectable } from '@angular/core';
import { MAIN_URL } from 'src/consts';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() { }

  public getElementImage(element:string):string{
    let url=MAIN_URL+"/elements/"
    return url+element.toLowerCase()+"/icon";
  }
  public getNationImage(nation:string):string{
    let url=MAIN_URL+"/nations/"
    return url+nation.toLowerCase()+"/icon";
  }
}
