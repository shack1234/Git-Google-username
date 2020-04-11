import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user-search', component: UserComponent},
  { path: 'repos', component: RepositoryComponent},
  // { path: '', redirectTo:"/user-search", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
