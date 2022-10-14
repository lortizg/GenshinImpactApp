import { Injectable } from '@angular/core';
import { DEFAULT_BACKGROUND } from 'src/consts';
import { ICharacter } from '../interfaces/ICharacter';
import { ICharacterImages } from '../interfaces/ICharacterImages';
import { ISkillTalent } from '../interfaces/ISkillTalent';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public url="https://api.genshin.dev/characters";
  constructor(private http:HttpService) { }

  public getDefaultCharacter() :ICharacter{
    return {
      name: "",
      title: "",
      vision: "",
      weapon: "",
      nation: "",
      affiliation: "",
      rarity: 0,
      constellation: "",
      birthday: "",
      description: "",
      skillTalents: [],
      passiveTalents: [],
      constellations: [],
      vision_key: "",
      weapon_type: "",

      images:this.getDefaultCharacterImages()
    }
  }
  private getDefaultCharacterImages():ICharacterImages{
    return {
      card:"",
      constellation:"",
      constellation1:"",
      constellation2:"",
      constellation3:"",
      constellation4:"",
      constellation5:"",
      constellation6:"",
      gacha_card:"",
      gacha_splash:"",
      icon:"",
      icon_big:"",
      portrait:"",
      talent_burst:"",
      talent_na:"",
      talent_passive0:"",
      talent_passive1:"",
      talent_passive2:"",
      talent_skill:""
    }
  }
  public async getCharacterList():Promise<any[]>{
    return (await this.http.get(this.url)).data;
  }
  public async getCharacterCards(){
    return  (await this.http.get("assets/cardsGenshin.json")).data;
  }
  public async getCharacterCard(character:string){
    return (await this.getCharacterCards()).filter(x=>(x.name.split(':')[0]).toLowerCase().replace(' ','-').includes(character) ||
    character.includes(x.name.split(':')[0].toLowerCase()) || 
    (character==="tartaglia" && x.name.includes("Childe"))) [0]?.namecard || DEFAULT_BACKGROUND;
  }
  public getCharacterIcon(character:string){
    return this.url+"/"+character+"/icon";
  }
  public getDisplayName(character:string){
    return character.replace('-',' ');
  }
  public async getCharacter(name:string):Promise<ICharacter>{
    return (await this.http.get(this.url+"/"+name)).data as ICharacter;
  }

  public async getImagesForCharacter(name:string):Promise<ICharacterImages>{
    let imagesAviables=(await this.http.get(this.url+"/"+name+"/list")).data;
    imagesAviables=imagesAviables.map(x=>{return this.url+"/"+name+"/"+x});
    let aux:ICharacterImages={
      card:imagesAviables[0],
      constellation:imagesAviables[1],
      constellation1:imagesAviables[2],
      constellation2:imagesAviables[3],
      constellation3:imagesAviables[4],
      constellation4:imagesAviables[5],
      constellation5:imagesAviables[6],
      constellation6:imagesAviables[7],
      gacha_card:imagesAviables[8],
      gacha_splash:imagesAviables[9],
      icon:imagesAviables[10],
      icon_big:imagesAviables[11],
      portrait:imagesAviables[12],
      talent_burst:imagesAviables[13],
      talent_na:imagesAviables[14],
      talent_passive0:imagesAviables[15],
      talent_passive1:imagesAviables[16],
      talent_passive2:imagesAviables[17],
      talent_skill:imagesAviables[18]
    }
    return aux;
  }

}
