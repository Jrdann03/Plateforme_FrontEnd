import { Component } from '@angular/core';

import { StoreSite } from '../../store-site/store-site';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [StoreSite],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {}