import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public userData: User;

	constructor(
		private apiService: ApiService
	) { }

	ngOnInit(): void {
		this.userData = this.apiService.getCurrentUser();
	}

	
}
