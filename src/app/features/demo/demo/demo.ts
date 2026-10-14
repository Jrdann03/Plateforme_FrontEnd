import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {

}
