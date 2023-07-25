import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpContentComponent } from './emp-content/emp-content.component';

const routes: Routes = [
  { path: "", redirectTo: "/details" ,pathMatch: "full"},
  { path: "details", component:EmpDetailComponent},
  { path: "details/:id", component:EmpContentComponent},
  { path: "list", component:EmpListComponent},
  { path: "**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [EmpDetailComponent,
                                  EmpListComponent,
                                  PageNotFoundComponent,
                                  EmpContentComponent
                                ]
