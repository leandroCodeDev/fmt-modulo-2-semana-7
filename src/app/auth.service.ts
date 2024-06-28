// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser = {
    course: 'Curso A' // Exemplo estático
  };

  getUserCourse(): string {
    return this.loggedInUser.course;
  }
}