import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {CommonModule} from '@angular/common';

interface Activity {
  title: string;
  description: string;
  dueDate: Date;
}

interface Subject {
  name: string;
  description: string;
}

interface ExtraCourse {
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  upcomingActivities: Activity[] = [
    { title: 'Entrega de trabalho', description: 'Trabalho da disciplina X', dueDate: new Date('2024-07-01') },
    { title: 'Avaliação', description: 'Avaliação da disciplina Y', dueDate: new Date('2024-07-05') },
    { title: 'Chat com o mentor', description: 'Chat com o mentor até a data Z', dueDate: new Date('2024-07-10') },
    // Adicione mais atividades conforme necessário
  ];

  currentSubjects: Subject[] = [
    { name: 'Disciplina A', description: 'Descrição da disciplina A' },
    { name: 'Disciplina B', description: 'Descrição da disciplina B' },
    { name: 'Disciplina C', description: 'Descrição da disciplina C' },
    // Adicione mais disciplinas conforme necessário
  ];

  extraCourses: ExtraCourse[] = [
    { name: 'Curso Extra 1', description: 'Descrição do curso extra 1' },
    { name: 'Curso Extra 2', description: 'Descrição do curso extra 2' },
    { name: 'Curso Extra 3', description: 'Descrição do curso extra 3' },
    // Adicione mais cursos extras conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {}
}