import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'john doe';
  public nameUpper: string = 'JOHN DOE';
  public fullName: string = 'joHn DOe';

  public customDate: Date = new Date();

}
