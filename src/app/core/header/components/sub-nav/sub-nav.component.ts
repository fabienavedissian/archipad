import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Methode qui va permettre de revenir en haut de l'écran quand on change de page
  public onClickNav() {
    window.scrollTo(0,0);
  }

}
