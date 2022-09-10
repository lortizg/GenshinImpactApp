import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

    constructor(private http: HttpService) { }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

}
