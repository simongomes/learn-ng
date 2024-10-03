import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<h1>Hello World! {{title}}</h1>`
})
export class AppComponent {
  title = 'play-ng';
}
