import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes =[{
  path:'pokemon/:searchTxt:sortBy',
  component:AppComponent
},
{
  path:'',
  redirectTo:'pokemon',
  pathMatch:'full'
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
