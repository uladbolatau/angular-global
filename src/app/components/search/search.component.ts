import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public searchValue: string;

  constructor() {}

  public ngOnInit() {}

  public submit(): boolean {
    console.log(`Search request: ${this.searchValue}`);
    return false;
  }
}
