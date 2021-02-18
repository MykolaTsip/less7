import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import {PostModuleModule} from './post-module/post-module.module';
// import { MenuComponent } from './components/menu/menu.component';
// import { FooterComponent } from './components/footer/footer.component';

// const routs: Routes = [
//   // // 1
//   // {
//   //   path: '', outlet: 'menu', component: MenuComponent
//   // },
//   // {
//   //   path: '', outlet: 'footer', component: FooterComponent
//   // },
//
//   // // 2
//   // {
//   //   path: 'showMenu', outlet: 'menu', component: MenuComponent
//   // },
//   // {
//   //   path: 'showFooter', outlet: 'footer', component: FooterComponent
//   // }
// ];

@NgModule({



  declarations: [
    AppComponent,
    HelloComponent,
    UsersComponent,
    // MenuComponent,
    // FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routs)
    PostModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
