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
      this.hideUl(0);
      this.hideUl(1);
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
      this.hideUl(0);
      this.hideUl(1);
   //console.log(this.characterList);
  }

  public hideUl(index:number){
    if(index===0){
      let father=document.getElementById("fixedSearch");
      (father.children[0] as HTMLElement).style.display="block";
      (father.children[2] as HTMLElement).style.display="none";
    }
    setTimeout(() => document.getElementsByTagName("ul")[index].style.display="none", 100);
    
  }
  public showList(index:number,event?:Event) {
    let list = document.getElementsByClassName("list");
    (list[index] as HTMLElement).style.display="block";
    if(event) this.onChange.emit(event as Event);
  }
  public showInput(){
    let father=document.getElementById("fixedSearch");
    (father.children[0] as HTMLElement).style.display="none";
    (father.children[2] as HTMLElement).style.display="block";
  }

}
