import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component'
import { UserGuard } from 'src/app/services/user.guard'
import { UserComponent } from './user/user.component'

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
		canActivate: [UserGuard]
	},
	{
		path: "auth",
		component: AuthComponent
	},
	{
		path: "users",
		component: UserComponent
	},
	{
		path: "",
		redirectTo: "/auth",
		pathMatch: 'full'
	},
	{
		path: "**",
		redirectTo: "/auth"
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
