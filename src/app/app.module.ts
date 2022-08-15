import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CounterComponent,
    AboutComponent,
    MenuComponent,
    OffersComponent,
    ReviewsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
