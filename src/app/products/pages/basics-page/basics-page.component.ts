import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'alvaro';
  public nameUpper: string = 'ALVARO';
  public fullName: string = 'AlvARo JoSE';

  public customDate: Date = new Date();

}
