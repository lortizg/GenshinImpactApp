import { Component, HostListener, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  public characterList:any;
  public filteredString:string;
  constructor(private characterManager:CharacterService) {
    
  }
  @HostListener('window:scroll', ['$event'])
  public onScroll(event) {
    if(window.pageYOffset<100){
      document.getElementById("container").style.transform="translateY(-100%)";
      this.hideUl();
    } else{
      document.getElementById("container").style.transform="translateY(100%)";
      this.showList();
    }
  }
  public async ngOnInit(): Promise<void> {
    this.characterList=await this.characterManager.getCharacterList();
    this.characterList=this.characterList.map(x=>{return this.characterManager.getDisplayName(x)});
   //console.log(this.characterList);
  }

  public hideUl(){
    document.getElementsByTagName("ul")[0].style.display="none";
  }
  public showList() {
    let list = document.getElementById("list");
    list.style.display="block";
  }

}
