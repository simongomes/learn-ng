import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HomeComponent
  ]
})
export class AppComponent {
  title = 'play-ng';
}
