import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    OrderComponent,
    TableComponent,
    SearchComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
  ],
})
export class OrderModule {}
