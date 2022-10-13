import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss']
})
export class CharacterDetailPage implements OnInit {

  constructor() { }

  public ngOnInit(): void {  }

}
