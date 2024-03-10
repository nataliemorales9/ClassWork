import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',   // This is where to insert our template code
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',    // Here's the html we want
  styleUrl: './app.component.css'         // Here's the style sheet we want
})
export class AppComponent {
  title = '08-Angular-Day-2';
}
