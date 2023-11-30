import { Component, OnDestroy, OnInit } from "@angular/core";
import { Chapter3Service } from "./chapter-3.service";
import { environment as env } from "../../environments/environment";
import { ImageProcess } from "./interface/image-process";
import { ProcessorType } from "./interface/processor-type";

@Component({
  selector: "app-chapter-3",
  templateUrl: "./chapter-3.component.html",
  styleUrl: "./chapter-3.component.scss",
})
export class Chapter3Component implements OnInit, OnDestroy {
  protected chapter3Hello: string = "Loading...";
  processorType: ProcessorType[] = [
    { processor_name: "negative" },
    { processor_name: "thresholding" },
    { processor_name: "logarithm" },
    { processor_name: "inverse-logarithm" },
  ];
  twoValueProcessor: string[] = ["logarithm", "inverse-logarithm"];

  fileName: string = "";
  imageProcess: ImageProcess = {};
  chosenProcessorType: string = "";
  cValue: number = 0;
  file: File = new File([], "");
  selectedProcessorType: string = "";

  imageState: boolean = false;
  imageUrl = env.imageUrl;

  constructor(private chapter3Service: Chapter3Service) {}

  ngOnInit(): void {
    this.chapter3Service.getChapter3Hello().subscribe((data: any) => {
      this.chapter3Hello = data["message"];
    });
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      const upload$ = this.chapter3Service.processImage(
        this.file,
        "negative",
        "",
      );

      upload$.subscribe((data: any) => {
        this.imageState = true;
        this.imageProcess = {
          original_image: `${this.imageUrl}${data["original_image"]}`,
          processed_image: `${this.imageUrl}${data["processed_image"]}`,
        };
      });
    }
  }

  onProcessImage(): void {}

  onSelectedProcessorType(event: any): void {
    this.selectedProcessorType = event.value;
  }

  formatLabel(value: number): string {
    if (value >= 0.01) {
      return `${Math.round(value / 0.01)}`;
    }
    return `${value}`;
  }
}
