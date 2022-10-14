import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss']
})
export class CharacterDetailPage implements OnInit {

  public char:ICharacter;
  constructor(private characterManager:CharacterService, private route:ActivatedRoute) {
    this.char=characterManager.getDefaultCharacter();
    console.log(this.char);
  }

  public async ngOnInit(): Promise<void> {  
    this.char=(await this.characterManager.getCharacter(this.route.snapshot.paramMap.get("name")));
    this.char.images=await this.characterManager.getImagesForCharacter(this.route.snapshot.paramMap.get("name"));
    //console.log(this.char);
  }

}
