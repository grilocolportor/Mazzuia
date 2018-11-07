import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BottombarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bottombar',
  templateUrl: 'bottombar.html'
})
export class BottombarComponent {

  @Input() imageButton1: string;

  @Output() footerClicked1 = new EventEmitter()

  constructor() {}

    


  


}
