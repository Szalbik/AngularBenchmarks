declare function require(path: string);
import { Component, OnInit } from "@angular/core";
import { MyImage } from "./MyImage";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: MyImage[] = [];

  constructor() {}

  ngOnInit() {}

  _addPhoto = () => {
    this.photos.push({
      id: this.photos.length + 1,
      src: "assets/image.jpg"
    });
  };

  _deletePhoto = () => {
    this.photos.pop();
  };
}
