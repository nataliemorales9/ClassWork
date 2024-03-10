// The import gives us access to external features and components
// Most imported names must be included in the imports property of the component
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleFormComponent } from './sample-form/sample-form.component';

@Component({  // Metadata for the component, gives angular some basic info
  selector: 'app-root',   // This is what is used to include this component on a page
  standalone: true,       // Added in Angular 17 to allow components to be independent
  imports: [RouterOutlet, SampleFormComponent],   // Identifies things used
  templateUrl: './app.component.html',    // Where to find the html file and css file
  styleUrl: './app.component.css'
})
//This defines a module for this component
//The export says let things outside the component access it
//Class - this is a group of things associated with this component
export class AppComponent {
  pageTitle = 'Welcome to FSD - Cohort-1-2024 Angular App';
}
