import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import { SinglePostComponent } from './components/single-post/single-post.component';


@NgModule({
  declarations: [AllPostsComponent, SinglePostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostModuleRoutingModule
  ]
})
export class PostModuleModule { }
