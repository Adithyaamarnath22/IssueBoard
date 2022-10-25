import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IssueComponent } from './component/issue/issue.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [{path :"",component:HomeComponent},
{path:"list",component:ListComponent},
{path:"issue",component:IssueComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


