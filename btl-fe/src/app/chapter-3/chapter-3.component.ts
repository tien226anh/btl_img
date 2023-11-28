import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chapter3Service } from './chapter-3.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

interface ImageProcess {
  original_image?: string;
  processed_image?: string;
}

@Component({
  selector: 'app-chapter-3',
  templateUrl: './chapter-3.component.html',
  styleUrl: './chapter-3.component.scss'
})
export class Chapter3Component implements OnInit, OnDestroy{

  chapter3Hello: string = 'Loading...';
  fileName = '';
  imageProcess: ImageProcess = {};
  imageState: boolean = false;
  imageUrl = env.imageUrl;

  constructor(
    private chapter3Service: Chapter3Service,
    private http: HttpClient
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

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if(file){
      this.fileName = file.name;
      const upload$ = this.chapter3Service.processImage(file, 'negative', '');

      upload$.subscribe((data: any) => {
        this.imageState = true;
        this.imageProcess = {
          original_image: `${this.imageUrl}${data['original_image']}`,
          processed_image: `${this.imageUrl}${data['processed_image']}`
        };
        console.log(this.imageProcess);
      });
    }
  }

}
