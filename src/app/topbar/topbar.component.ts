import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})

export class TopbarComponent implements OnInit {

  menuDrawerActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleDrawer(){
    this.menuDrawerActive = !this.menuDrawerActive
  }

}
