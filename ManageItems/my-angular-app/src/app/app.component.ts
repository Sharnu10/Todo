import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // templateUrl: './root.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'my-angular-app';
}
