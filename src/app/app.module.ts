import { NavModule } from './modules/nav/nav.module';
import { SharedModule } from './modules/shared/shared.module';
import { OrderModule } from './modules/features/order/order.module';
import { DashboardModule } from './modules/features/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    OrderModule,
    SharedModule,
    NavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
