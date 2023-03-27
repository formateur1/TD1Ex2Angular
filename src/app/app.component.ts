import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre:string = 'TD1Ex2';

  imageUrl:string = "https://www.intiformation.com/wp-content/uploads/2021/05/ezgif-2-2cdc70725914.gif";

  nomClasse:string = "texte";

  bouton:boolean = true;

  onClick():void 
  {
    console.log("bouton cliqué");
  }
}
