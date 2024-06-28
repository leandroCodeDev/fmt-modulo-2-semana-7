import { Component} from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


interface Student {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  course: string;
}


@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})



export class AlunosComponent{

  searchQuery: string = '';
  students: Student[] = [
    { fullName: 'João Silva', cpf: '123.456.789-00', email: 'joao@gmail.com', phone: '99999-9999', course: 'Curso A' },
    { fullName: 'Maria Oliveira', cpf: '987.654.321-00', email: 'maria@gmail.com', phone: '88888-8888', course: 'Curso B' }
    // Adicione mais alunos aqui
  ];
  filteredStudents: Student[] = [...this.students];
  displayedColumns: string[] = ['fullName', 'cpf', 'email', 'course', 'actions'];

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onSearch(): void {
    if (this.searchQuery) {
      this.filteredStudents = this.students.filter(student =>
        student.fullName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredStudents = [...this.students];
    }
  }

  onEdit(student: Student): void {
    // Redirecionar para a tela de edição com os dados do aluno
    this.router.navigate(['/cadastro-aluno'], { state: { student } });
  }

  onDelete(student: Student): void {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.students = this.students.filter(s => s !== student);
      this.onSearch(); // Atualizar a lista filtrada
      this.snackBar.open('Usuário excluído com sucesso', 'Fechar', {
        duration: 3000
      });
    }
  }
}
