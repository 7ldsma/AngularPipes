import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Alvaro';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla',
  }


  changeClient():void {
    this.name = 'Carmen';
    this.gender = 'female';
  }

  //i18nPlural
  public clients : string[] = ['Alvaro', 'Marc', 'Fernando', 'Maria', 'Carmen', 'Sebas'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift()
  }


  //KeyValue Pipe
  public person = {
    name: 'Alvaro',
    age: 33,
    address: 'Provenza 287',
  }


  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value ))
  );

}
