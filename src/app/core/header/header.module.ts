// MODULES
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

// COMPONENTS
import { NavComponent } from './components/nav/nav.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    NavComponent,
    SubNavComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
