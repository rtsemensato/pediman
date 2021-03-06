import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from "./crud/crud.component";
import { ListaComponent } from "./lista/lista.component";
import { DetalhesComponent } from "./detalhes/detalhes.component";

const routes: Routes = [
  {
    path:'produtos',
    component:CrudComponent,
    children:[
      { path:'',component:ListaComponent },
      { path:'detalhes',component:DetalhesComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
