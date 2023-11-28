import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chapter3Service } from './chapter-3.service';

@Component({
  selector: 'app-chapter-3',
  templateUrl: './chapter-3.component.html',
  styleUrl: './chapter-3.component.scss'
})
export class Chapter3Component implements OnInit, OnDestroy{

  chapter3Hello: string = 'Loading...';

  constructor(
    private chapter3Service: Chapter3Service
  ) { }

  ngOnInit(): void {
    this.chapter3Service.getChapter3Hello().subscribe((data: any) => {
      this.chapter3Hello = data['message'];
      console.log(data['message']);
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
