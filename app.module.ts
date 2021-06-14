import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanterDetailsComponent } from '../planter-details/planter-details.component';
//import { PlanterServiceComponent } from '../planter-service/planter-service.component';
import { AllPlantersComponent } from '../all-planters/all-planters.component';
import { DescriptionPipe } from './description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanterDetailsComponent,
    //PlanterServiceComponent,
    AllPlantersComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
