import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss']
})
export class CharacterDetailPage implements OnInit,OnDestroy {

  public char:ICharacter;
  constructor(private router:Router, private settings:SettingsService,private imageManager:ImageService,private characterManager:CharacterService, private route:ActivatedRoute) {
    this.char=characterManager.getDefaultCharacter();
  }
  
  @HostListener('window:beforeunload')
  public async ngOnInit(): Promise<void> { 
    let char; 
    try{
      char=(await this.characterManager.getCharacter(this.route.snapshot.paramMap.get("name")));
     } catch{
      window.onbeforeunload=(()=>{console.log("hola");})
      this.router.navigateByUrl('/error');
      return;
    }
    let date=new Date(char.birthday).toLocaleDateString('en-US',{month:'long',day:'numeric'});
    char.birthday=date;
    char.images=await this.characterManager.getImagesForCharacter(this.route.snapshot.paramMap.get("name"));
    document.body.classList.add(char.vision_key+"_bg");
    
    this.char=char;
    this.getStars();
    setTimeout(() => this.showImage("card"), 250);
  }
  public ngOnDestroy(): void {
    document.body.classList.remove(this.char.vision_key+"_bg");
  }

  public getStars(){
    let rarity=this.char.rarity;
    let html=document.getElementById("rarity");
    for(let i=0; i<rarity;i++){
      html.innerHTML+="<span class='material-icons' style='font-size: 100%;'>star</span>";
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
    document.getElementById("button_card").style.backgroundColor="rgba(0, 0, 0, 0.44)";
    document.getElementById("portrait").style.display="none";
    document.getElementById("button_portrait").style.backgroundColor="rgba(0, 0, 0, 0.44)";
    document.getElementById("splash").style.display="none";
    document.getElementById("button_splash").style.backgroundColor="rgba(0, 0, 0, 0.44)";

    document.getElementById(image).style.display="block";
    document.getElementById("button_"+image).style.backgroundColor="rgba(0, 0, 0, 0.63)";
  }

  public onModalOpen(image:string): void {
    this.settings.openModal({ 
        image:image
    });
  }
  public handleMissingImage(event:Event){
    (event.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wolf%E2%80%93Lundmark%E2%80%93Melotte_%28transparent_background%29.png/2048px-Wolf%E2%80%93Lundmark%E2%80%93Melotte_%28transparent_background%29.png';
  }
}
