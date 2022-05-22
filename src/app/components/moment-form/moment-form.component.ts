import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  // o ! indica que pode ser inicializado ou não
  @Input() btnText!: string;

  momentForm!: FormGroup;

  constructor() {}

  //usado para inicialização de recursos do angular
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    // a exclamação (!  ) no final do  this.momentForm.get('title') informa que as propriedades iraão sim existir
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  submit(): void {
    //se o fomr estiver invalido, não permite que o formulario seja enviado
    if (this.momentForm.invalid) {
      return;
    }
    console.log('Enviou formulario');
  }
}
