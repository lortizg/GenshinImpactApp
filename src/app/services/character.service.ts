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
      constellations:[], //c, c1,c2,c3,c4,c5,c6
      gacha_card:"",
      gacha_splash:"",
      icon:"",
      icon_big:"",
      icon_side:"",
      portrait:"",
      talents:[], // na,skill,burst,p0,p1,p2
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
    let urlAviables=imagesAviables.map(x=>{return this.url+"/"+name+"/"+x});
    let aux=this.getDefaultCharacterImages();

    for(let i=0;i<imagesAviables.length;i++){
      switch(imagesAviables[i]){
        case "card":
          aux.card=urlAviables[i];
        break;
        case "constellation":
          aux.constellations[0]=urlAviables[i];
        break;
        case "constellation-1":
          aux.constellations[1]=urlAviables[i];
        break;
        case "constellation-2":
          aux.constellations[2]=urlAviables[i];
        break;
        case "constellation-3":
          aux.constellations[3]=urlAviables[i];
        break;
        case "constellation-4":
          aux.constellations[4]=urlAviables[i];
        break;
        case "constellation-5":
          aux.constellations[5]=urlAviables[i];
        break;
        case "constellation-6":
          aux.constellations[6]=urlAviables[i];
        break;
        case "gacha-card":
          aux.gacha_card=urlAviables[i];
        break;
        case "gacha-splash":
          aux.gacha_splash=urlAviables[i];
        break;
        case "icon":
          aux.icon=urlAviables[i];
        break;
        case "icon-big":
          aux.icon_big=urlAviables[i];
        break;
        case "icon-side":
          aux.icon_side=urlAviables[i];
        break;
        case "portrait":
          aux.portrait=urlAviables[i];
        break;
        case "talent-burst":
          aux.talents[2]=urlAviables[i];
        break;
        case "talent-na":
          aux.talents[0]=urlAviables[i];
        break;
        case "talent-passive-0":
          aux.talents[3]=urlAviables[i];
        break;
        case "talent-passive-1":
          aux.talents[4]=urlAviables[i];
        break;
        case "talent-passive-2":
          aux.talents[5]=urlAviables[i];
        break;
        case "talent-skill":
          aux.talents[1]=urlAviables[i];
        break;

      }
    }
    return aux;
  }

}
