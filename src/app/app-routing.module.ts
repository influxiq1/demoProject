import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfElseComponent } from './component/if-else/if-else.component';

const routes: Routes = [
  {path: 'ifelse', component: IfElseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
