import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BindingTestComponent } from './binding-test/binding-test.component';
import { ParentComponent } from './parent/parent.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BindingTestComponent, ParentComponent, ApiTestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ang';
}
