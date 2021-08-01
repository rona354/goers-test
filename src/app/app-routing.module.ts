import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { DashboardComponent } from 'src/app/Pages/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/Pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `search`
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
