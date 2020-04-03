import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { UsersOptionsComponent } from './users/users-options/users-options.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersListItemComponent } from './users/users-list-item/users-list-item.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersOptionsComponent,
    UsersListComponent,
    UsersListItemComponent,
    NewUserComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
