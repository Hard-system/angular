import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { ReadMoreComponent } from './show-post/show-read-more.component';
import { AddPostComponent } from './add-post/add-post.component';
import { SqlComponent } from './hppe/sql-errors/sql-errors.component';
import { CommonService } from './service/common.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { QuillModule } from 'ngx-quill-wrapper';
import { QUILL_CONFIG } from 'ngx-quill-wrapper';
import { QuillConfigInterface } from 'ngx-quill-wrapper';

const DEFAULT_QUILL_CONFIG: QuillConfigInterface = {
  theme: 'snow',
  modules: {
    toolbar: true
  },
  placeholder: 'Empty canvas'
};

@NgModule({
  declarations: [
  	RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponent,
    SqlComponent,
    ReadMoreComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    QuillModule
  ],
  providers: [CommonService,
    {
      provide: QUILL_CONFIG,
      useValue: DEFAULT_QUILL_CONFIG
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
