// Define the modules and other component or features used by the component 

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learner-list',   // this is the tag used in html to reference the component
  standalone: true,   // Added in Angular 17 to make data-binding [ngModel] and routing easier
  imports: [CommonModule],    //external features you use in this component
  templateUrl: './learner-list.component.html',
  styleUrl: './learner-list.component.css'
})
// Defines the module for the component and also makes it externally available
// This is where data and methods for the component are defined
export class LearnerListComponent {
  // Define the list of learner names we want to display

  // Public says that data is accessible by anyone with access to the module
  // private says the data is accessible only by methods in the component
  public learnerNames = ["Bertram", "natalie", "Frank"]
}
