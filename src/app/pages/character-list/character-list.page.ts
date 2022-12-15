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
  public filteredString:string;
  private list:HTMLElement;
  private listSection:HTMLCollection;
  private gridIcon:{"default":any,"full":any};
  private listIcon:any;
  private onGrid=false;
  constructor(private characterManager:CharacterService) {
    this.filteredString="";
  }

  public async ngOnInit(): Promise<void> { 
    let div=document.getElementById("grid");
    this.gridIcon={default:div.children[0],full:div.children[1]};
    this.gridIcon.full.style.display="none";
    this.listIcon=document.getElementById("listIcon").children[0];

    this.list=document.getElementById('ListContainer');
    this.characters=await this.characterManager.getCharacterList();
    for(let i=0;i<this.characters.length;i++){
      this.characters[i]={
      "name":this.characters[i],
      "displayName":this.characterManager.getDisplayName(this.characters[i]),
      "icon":this.characterManager.getCharacterIcon(this.characters[i]),
      "card": await this.characterManager.getCharacterCard(this.characters[i])
      
    };
    }
    
    this.listSection=document.getElementsByClassName('listSection');


  }

  public toList(){
    this.onGrid=false;
    this.list.style.display="block";
    
    for(let i=0; i<this.listSection.length;i++){
      (this.listSection[i] as HTMLElement).style.display="grid";
      (this.listSection[i] as HTMLElement).style.flexDirection= "row";
      (this.listSection[i] as HTMLElement).style.alignItems= "center";
      (this.listSection[i] as HTMLElement).style.borderRadius="80px 0 0 80px";
      (this.listSection[i] as HTMLElement).style.margin="1% auto";
    }
  }
  public toGrid(){
    this.onGrid=true;
    this.list.style.display="grid";
    this.list.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))";
    
    for(let i=0; i<this.listSection.length;i++){
      (this.listSection[i] as HTMLElement).style.display="flex";
      (this.listSection[i] as HTMLElement).style.flexDirection="column";
      (this.listSection[i] as HTMLElement).style.justifyContent="flex-end";
      (this.listSection[i] as HTMLElement).style.alignItems="center";
      (this.listSection[i] as HTMLElement).style.borderRadius="5px";
      (this.listSection[i] as HTMLElement).style.margin="1%";
    }
    /*
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    */
  }
  public overIcon(event:Event,icon:string){
    if(icon==="grid"){
      this.gridIcon.default.style.display="none";
      this.gridIcon.full.style.display="block";
    } else if(icon==="list"){
      this.listIcon.style.color="rgb(196, 165, 95)";
    }
  }
  public outIcon(event:Event,icon:string){
    if(!this.onGrid){
      this.gridIcon.default.style.display="block";
      this.gridIcon.full.style.display="none";
    } else{
     this.listIcon.style.color="white";
    }
   }

  public onInput(event:Event){
    this.filteredString=(event.target as HTMLInputElement).value;
    //console.log(this.filteredString);
  }

}
