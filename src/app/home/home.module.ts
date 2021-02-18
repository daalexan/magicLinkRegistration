import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

import { ApiService } from 'src/app/services/api.service'
import { UserGuard } from 'src/app/services/user.guard';
import { UserComponent } from './user/user.component'

@NgModule({
	declarations: [
		HomeComponent,
		AuthComponent,
		UserComponent
	],
	imports: [
		HomeRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: [
		ApiService,
		UserGuard
	]
})
export class HomeModule { }
