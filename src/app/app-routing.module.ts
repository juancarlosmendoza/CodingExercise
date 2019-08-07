import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationComponent } from './publication/publication.component';
import { DetailAutorComponent } from './detail-autor/detail-autor.component';


const routes: Routes = [


    { path: '', component: PublicationComponent},
    { path: 'Autor/:idAutor', component: DetailAutorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always', useHash: true , enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
