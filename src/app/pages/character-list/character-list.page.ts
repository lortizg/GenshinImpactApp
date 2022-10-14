import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
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
  constructor(private characterManager:CharacterService) { }

  public async ngOnInit(): Promise<void> { 


    this.characters=await this.characterManager.getCharacterList();
    for(let i=0;i<this.characters.length;i++){
      this.characters[i]={
      "name":this.characters[i],
      "displayName":this.characterManager.getDisplayName(this.characters[i]),
      "icon":this.characterManager.getCharacterIcon(this.characters[i]),
      "card": await this.characterManager.getCharacterCard(this.characters[i])
      
    };
    }

  }

}
