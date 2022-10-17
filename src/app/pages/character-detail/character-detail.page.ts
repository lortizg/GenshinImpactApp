import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss']
})
export class CharacterDetailPage implements OnInit {

  public char:ICharacter;
  constructor(private imageManager:ImageService,private characterManager:CharacterService, private route:ActivatedRoute) {
    this.char=characterManager.getDefaultCharacter();
  }
  

  public async ngOnInit(): Promise<void> {  
    this.char=(await this.characterManager.getCharacter(this.route.snapshot.paramMap.get("name")));
    this.char.images=await this.characterManager.getImagesForCharacter(this.route.snapshot.paramMap.get("name"));
    this.getStars();
    this.showImage("card");
  }

  public getStars(){
    let rarity=this.char.rarity;
    let html=document.getElementById("rarity");
    for(let i=0; i<rarity;i++){
      html.innerHTML+="<span class='material-icons'>star</span>";
    }
  }
  public getElementImage():string{
    return this.imageManager.getElementImage(this.char.vision);
  }
  public getNationImage():string{
    return this.imageManager.getNationImage(this.char.nation); 
  }

  public showImage(image:string){
    document.getElementById("card").style.display="none";
    document.getElementById("portrait").style.display="none";
    document.getElementById("splash").style.display="none";

    document.getElementById(image).style.display="block";
  }
}
