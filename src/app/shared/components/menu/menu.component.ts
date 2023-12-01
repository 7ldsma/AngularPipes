import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems: MenuItem[] = []


  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/',
          },
          {
            label: 'Número',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon',

          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Otro elemento',
            icon: PrimeIcons.COG,

          }
        ]
      }

    ];
  }

}
