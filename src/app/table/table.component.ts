import * as _ from "lodash";
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
  backupPosts: Item[];

  constructor(private apiService: ConfigService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(res => {
      this.backupPosts = res;
      console.log(this.backupPosts);
    });
  }

  add100Rows() {
    this.posts = this.backupPosts;
  }

  add1000Rows() {
    this.posts = this.backupPosts.concat(
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts,
      this.backupPosts
    );
  }

  clearRows() {
    this.posts = [];
  }

  updateEveryRow() {
    this.posts.map(post => {
      post.title += "!!!";
      post.body += "!!!";
    });
  }

  swapRows() {
    this.posts = _.shuffle(this.posts);
  }
}
