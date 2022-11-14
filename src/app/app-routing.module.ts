import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './public/components/home/home.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'public',
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then(m=>m.PublicModule)
  },
  {
    path: 'private',
    component: PrivateComponent,
    loadChildren: () => import('./private/private.module').then(m=>m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
