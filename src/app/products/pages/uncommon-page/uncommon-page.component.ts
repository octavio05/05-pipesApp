import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'John Doe';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'John Doe',
    age: 36,
    address: 'Ottawa, Canada'
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500);
  });

}
