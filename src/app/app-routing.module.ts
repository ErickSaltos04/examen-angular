import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaExamenComponent} from './pages/pantalla-examen/pantalla-examen.component'
const routes: Routes = [
  {path:'', redirectTo:'pokemon', pathMatch: 'full'},
  {path:'pokemon', component:PantallaExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
