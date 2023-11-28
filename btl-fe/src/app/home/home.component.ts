import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  homeValue: string = 'Loading...';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit (): void {

    this.homeService.getHome().subscribe((data: any) => {
      console.log(data['message']);
      this.homeValue = data['message'];
    });

  }
}
