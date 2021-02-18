import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {UsersComponent} from './components/users/users.component';


const routs: Routes = [
  {
    path: '', component: HelloComponent, children: [
  {
    path: 'users', component: UsersComponent
  },
      {
        path: 'posts', loadChildren: () => import('./post-module/post-module.module').then(m => m.PostModuleModule)
      }
    ]
  }
  ];

@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],


  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
