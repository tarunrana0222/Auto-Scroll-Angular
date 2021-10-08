import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  color: string = "yellow";
  flag:boolean= false;
  ngOnInit(): void {
  }
  toggleTrue() {
    this.flag = true;
    console.log(this.flag)
  }
  toggleFalse() {
    this.flag = false;
    console.log(this.flag)

  }

}
