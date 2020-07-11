import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MycomComponent } from './mycom/mycom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserData } from './shared/userData.service';
import { DepartmentData } from './shared/departmentData.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikecompComponent } from './likecomp/likecomp.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MycomComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    LikecompComponent  //This is to make the compoenent visisble to other componements
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserData,DepartmentData,UserService],
  bootstrap: [AppComponent] //This is to make componenet to be visisble to index.htnl
})
export class AppModule { }
