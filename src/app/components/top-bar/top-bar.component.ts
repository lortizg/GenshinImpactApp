import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  public characterList:any;
  public filteredString:string;
  @Output() public onChange = new EventEmitter<Event>();
  constructor(private characterManager:CharacterService) {
    
  }
  @HostListener('window:scroll', ['$event'])
  public onScroll(event) {
    if(window.pageYOffset<100){
      document.getElementById("stickyBar").style.transform="translateY(-100%)";
      this.hideUl();
    } else{
      document.getElementById("stickyBar").style.transform="translateY(100%)";
      //this.showList();
    }
  }
  public async ngOnInit(): Promise<void> {
    this.characterList=await this.characterManager.getCharacterList();
    this.characterList=this.characterList.map(x=>{
      return{
        "name":x,
        "displayName":this.characterManager.getDisplayName(x)
      }})
      this.hideUl();
   //console.log(this.characterList);
  }

  public hideUl(){
    setTimeout(() => document.getElementsByTagName("ul")[0].style.display="none", 100);
    
  }
  public showList(event?:Event) {
    let list = document.getElementById("list");
    list.style.display="block";
    if(event) this.onChange.emit(event as Event);
  }

}
