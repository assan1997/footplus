import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

navigationItems = [
     {
      text :'Home',
      iconurl : '/assets/home.svg',
      active :true
    },
    {
      text :'Live',
      icon :'▲',
      active :false
    },
    {
      text :'Favorite',
      iconurl : '/assets/star.svg',
      active :false
    },
  ]
    sportItems =[
    {
      text :'Football',
      iconurl : '/assets/foot.svg',
      active :false
    },
    {
      text :'Tenis',
      iconurl : '/assets/tenis.svg',
      active :false
    },
    {
      text :'Volleyball',
      iconurl : '/assets/volley.svg',
      active :false
    },
    {
      text :'Betting',
      code : 'A-Z',
      active :true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleNavigation(type:String , index :any):void{
      if(type === 'sport'){
        this.sportItems = this.sportItems.map((item , i)=> i === index ? {...item , active:true }:  {...item , active:false} )
      }else{
        this.navigationItems = this.navigationItems.map((item , i)=> i === index ? {...item , active:true }:  {...item , active:false} )
      }
  }

}
