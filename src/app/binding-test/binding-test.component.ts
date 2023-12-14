import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding-test.component.html',
  styleUrl: './binding-test.component.css'
})
export class BindingTestComponent {

  counter : number = 0;

  Increment() {
    this.counter++;
  }

}
