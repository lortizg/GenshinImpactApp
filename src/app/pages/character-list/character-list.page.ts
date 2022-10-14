import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DEFAULT_BACKGROUND, DEFAULT_ICON } from 'src/consts';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss']
})
export class CharacterListPage implements OnInit {

  public characters:any;
  public defaultIcon=DEFAULT_ICON;
  constructor(private http:HttpService) { }

  public async ngOnInit(): Promise<void> { 


    this.characters=(await this.http.get("https://api.genshin.dev/characters")).data;
    for(let i=0;i<this.characters.length;i++){
      this.characters[i]={
      "name":this.characters[i],
      "displayName":this.characters[i]==="tartaglia"?"Childe":this.characters[i].replace('-',' '),
      "icon":"https://api.genshin.dev/characters/"+this.characters[i]+"/icon",
      "card": (await this.http.get("assets/cardsGenshin.json")).data.filter(x=>(x.name.split(':')[0]).toLowerCase().replace(' ','-').includes(this.characters[i]) ||
                                                                                this.characters[i].includes(x.name.split(':')[0].toLowerCase()) || 
                                                                                (this.characters[i]==="tartaglia" && x.name.includes("Childe")))
      [0]?.namecard || DEFAULT_BACKGROUND
    };
    }
    // this.http.get("assets/cardsGenshin.json").then(x=>{
    //   console.log(x);
    // })
    //console.log(this.characters);

  }

}
