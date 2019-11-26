import { Component, OnInit } from "@angular/core";
import {
  faStream,
  faCodeBranch,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  faStream = faStream;
  faCodeBranch = faCodeBranch;
  faLaptopCode = faLaptopCode;

  constructor() {}

  ngOnInit() {}
}
