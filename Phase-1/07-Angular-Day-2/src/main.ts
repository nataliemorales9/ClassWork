// This is executed as part of the bootstrap process
//
// Think of it as it starting the angular app
//
// Import gives us acces to previously written code we need to use

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// This starts the bootstrap process using the app component and appConfig code

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));    // Display any errors to the console
