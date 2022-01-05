import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  },
  {
    path: 'user',
    component: UserLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
