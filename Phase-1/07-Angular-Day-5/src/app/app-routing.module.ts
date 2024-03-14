/* Define the URL path-component connection for the application
    This tells the angular router which component...
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Be sure we have imported all the components we are connecting to a URL path */
import { SampleFormComponent } from './sample-form/sample-form.component';
import { StateSealsComponent } from './state-seals/state-seals.component';
import { HomeComponent }       from './home/home.component';
import { LearnerListComponent } from './learner-list/learner-list.component';

// The routes attribute defines the URL path component connection
// It is an array of objects with each object specifying a URL path
//    and the component its connected to
const routes: Routes = [
  // If there is no path use redirectTo: /home path
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // If the URL path is /home, swith to HomeComponent
  { path: 'home', component: HomeComponent },
  // If the URL path is /persinfo, swith to SampleFormComponent
  { path: 'persinfo', component: SampleFormComponent },
  { path: 'learners', component: LearnerListComponent },
  { path: 'stateseals', component: StateSealsComponent },
 ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}






