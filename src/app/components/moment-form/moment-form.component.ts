import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  // o ! indica que pode ser inicializado ou não
  @Input() btnText!: string;
  constructor() {}

  ngOnInit(): void {}
}
