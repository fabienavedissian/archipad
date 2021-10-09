import { Injectable } from '@angular/core';

export interface User {
    userId: number;
    login: string;
    name: string;
}

@Injectable({
  providedIn: 'root',
})

export class UserService {
    login(login: string, password: string): Promise<User> { 
        return new Promise<User>((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    userId: 123,
                    login: "thomas@bigsool.com",
                    name: "Thomas Dubois"
                });
            }, 100)
        });
    }
}
