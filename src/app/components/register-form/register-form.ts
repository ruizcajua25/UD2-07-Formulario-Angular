import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  comoNosConocio = '';
  password = '';
  confirmPassword = '';
  aceptaTerminos = false;

  opcionesConocimiento = [
    { valor: 'google', texto: 'Buscando en Google' },
    { valor: 'amigo', texto: 'A través de un amigo' },
    { valor: 'profesor', texto: 'Por mi profesor' },
  ];

  registrar() {
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('Cómo nos conoció:', this.comoNosConocio);
    console.log('Contraseña:', this.password);
    console.log('Confirmar contraseña:', this.confirmPassword);
    console.log('Acepta términos y condiciones:', this.aceptaTerminos);
  }
}
