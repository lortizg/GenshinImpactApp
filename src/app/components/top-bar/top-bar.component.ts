import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public characterList:any;
  constructor(private characterManager:CharacterService) {
    
  }

  public async ngOnInit(): Promise<void> {
    this.characterList=await this.characterManager.getCharacterList();
    console.log(this.characterList);
  }

  public myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  public hideUl(){
    document.getElementsByTagName("ul")[0].style.display="none";
  }
  public filterFunction() {
    var input, filter, a;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let list = document.getElementById("list");
    list.style.display="block";
    a = list.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "block";
      } else {
        a[i].style.display = "none";
      }
    }
  }

}
