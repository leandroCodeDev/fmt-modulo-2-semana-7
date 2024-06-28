import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {CommonModule} from '@angular/common';
import { AuthService } from '../auth.service';



interface Semester {
  semester: string;
  subjects: string[];
}
@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent  implements OnInit {
  courseName: string = '';
  semesters: Semester[] = [];

  // Exemplos de disciplinas por curso e semestre
  courseSubjects: { [key: string]: Semester[] } = {
    'Curso A': [
      { semester: 'Primeiro semestre', subjects: ['B', 'C'] },
      { semester: 'Segundo semestre', subjects: ['D', 'J'] },
      // Adicione mais semestres e disciplinas conforme necessário
    ],
    'Curso X': [
      { semester: 'Primeiro semestre', subjects: ['B', 'E'] },
      { semester: 'Segundo semestre', subjects: ['E', 'F'] },
      // Adicione mais semestres e disciplinas conforme necessário
    ],
    // Adicione mais cursos conforme necessário
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.courseName = this.authService.getUserCourse();
    this.semesters = this.courseSubjects[this.courseName] || [];
  }
}