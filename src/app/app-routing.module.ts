import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent} from './actor/alta/actor-alta/actor-alta.component'

const routes: Routes = [
  {path: "actor", component: ActorAltaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
