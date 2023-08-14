import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  
})
export class HomePage {
  title = 'Tour of Heroes';
  heroes= ['Windstorm', 'Bombasto','Magneta', 'Tornado'] ;
  myhero = this.heroes[0];
  constructor() {}
}

