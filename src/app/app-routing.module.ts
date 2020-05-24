
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component'
import { ProjectViewComponent } from './components/project-view/project-view.component';


const routes: Routes = [
  {
    path: 'projects', component: ProjectsComponent,
    children: [
      { path: ':id', component: ProjectViewComponent }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
