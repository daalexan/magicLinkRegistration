import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	public userList: User[];

	constructor(
		private apiService: ApiService
	) { }

	ngOnInit(): void {
		this.apiService.users().subscribe((users: User[]) => {
			this.userList = users;
			console.log(users);
		});
	}

}
