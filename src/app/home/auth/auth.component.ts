import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import { tap, filter, switchMap } from "rxjs/operators"
import { partitionArray } from '@angular/compiler/src/util';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	public message: string;
	public emailValue: string = '';

	constructor(
    	private apiService: ApiService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		this.route.queryParams.pipe(
			filter((params => params['user_token'] != "")),
			switchMap((params => this.apiService.checkToken(params['user_token']))),
			tap((user: User) => {
				if (user.email != undefined) {
					console.log(`user email = ${user.email}`);
					this.apiService.setCurrentUser(user);
					this.router.navigate(['/home']);
				}
				console.log(user)
			})
		).subscribe((value) => console.log(value));
	}

	public sendEmail() {
		if (this.emailValue != "") {
			this.apiService.sendUserMail(this.emailValue)
				.subscribe((response: string) => {
					this.message = response;
				});
		} else {
			this.message = "input field is empty"
		}
	}
}
