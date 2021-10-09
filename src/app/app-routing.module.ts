// MODULES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectModule } from './modules/project/project.module';


// Pas de lazy loading sur la 1ere page qui s'affiche, c'est pour cela que je n'utilise pas import('...').then(m => m.module)
const routes: Routes = [
  {
    path: '',
    loadChildren:  () => ProjectModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
