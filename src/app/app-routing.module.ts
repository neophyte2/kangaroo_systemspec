import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiatePositionComponent } from './pages/initiate-position/initiate-position.component';
import { PositionHistoryComponent } from './pages/position-history/position-history.component';

const routes: Routes = [

  { path: "", component: InitiatePositionComponent },

  { path: 'position-history', component: PositionHistoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
