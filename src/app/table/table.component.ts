import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Item } from "../item";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  posts: Item[];

  constructor(private apiService: ConfigService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }
}
