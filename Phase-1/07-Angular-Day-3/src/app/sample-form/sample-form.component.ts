import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule is required if the component uses html forms
import { FormsModule } from '@angular/forms'

// @Component includes the component in the imports array metadata
@Component({
  selector: 'sample-form',    // This is the tag used in any page to include this component
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sample-form.component.html',
  styleUrl: './sample-form.component.css'
})
// Class defines module containing any data and processing for the component
// export allows outside processes to access this module
export class SampleFormComponent {
  
    // a method to process any data accessible to the component
    // this. tells angular the data is in this component
    onSubmit() {
      console.log(`-----------------------------------------------`)
      console.log(` First name: ${this.fname}`)
      console.log(`  Last name: ${this.lname}`)
      console.log(` Birth Date: ${this.birthDate}`)
      console.log(` Cuisine(s): ${this.foodPrefs}`)
      console.log(`      email: ${this.email}`)
      console.log(`allow email: ${this.email_preference}`)
    }

      // Data used by the component 
      // public - this variable may be accessed by anything with access to the module
      // public (Access Modifier) is used to define data in a module instead of let/var
      // private is another Access Modifier that limits access to code in this module
      // public allows angular to access the data
      public fname = "";
      public lname = "";
      public birthDate = "";
      public foodPrefs = "";
      public email = "";
      public email_preference = "";

}
