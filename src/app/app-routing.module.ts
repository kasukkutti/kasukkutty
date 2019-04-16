import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppHomeComponent } from './home/home.component';

const routes: Routes = [
	{
	        path: '',
	        redirectTo: 'index',
	        pathMatch: 'full',
    	},
    	{
        	path: 'index',
	        component: AppComponent,
    	}
	    ,{
        	path: 'home',
	        component: AppHomeComponent,
    	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
