import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Methode qui va permettre de revenir en haut de l'écran quand on change de page
  public onClickNav() {
    window.scrollTo(0,0);
  }

}
