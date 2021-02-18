import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model'
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiService {

	private _currentUser: User;

	constructor(private http: HttpClient) { }

	public getData() {
		return this.http.get(`${environment.host_url}hello`);
	}

	public checkToken(token: string): Observable<User> {
		return this.http.get<User>(`${environment.host_url}auth?user_token=${token}`);
	}

	public sendUserMail(email: string) {
		return this.http.post(`${environment.host_url}auth`, { "user_email": email})
	}
	
	public users(): Observable<User[]> {
		return this.http.get<User[]>(`${environment.host_url}users`);
	}

	public setCurrentUser(user: User) {
		this._currentUser = user;
	}

	public getCurrentUser(): User {
		return this._currentUser;
	}
}
