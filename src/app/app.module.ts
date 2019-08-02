import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PricingInfoComponent } from './first-component/pricing-info.component';
import { InfoComponent } from './first-component/info.component';
import { PricingCardComponent } from './first-component/pricing-card.component';
import { BtnsComponent } from './first-component/btns.component';
import { DirectivesDirective } from './directives.directive';
import { MyDirectivesComponent } from './my-directives/my-directives.component';
import { SizerDirective } from './my-directives/sizer.directive';
import { ServicesComponent } from './services/services.component';
import { MessagingService } from './services/messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PricingInfoComponent,
    InfoComponent,
    PricingCardComponent,
    BtnsComponent,
    DirectivesDirective,
    MyDirectivesComponent,
    SizerDirective,
    ServicesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
