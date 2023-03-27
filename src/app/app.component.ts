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

  utilisateur:any[] = [
    {"nom":"Dupont", "prenom":"Jean", "email":"info@info.fr", "tel":"010203", "age":28},
    {"nom":"Durand", "prenom":"Louis", "email":"info1@info.fr", "tel":"010203", "age":36},
    {"nom":"Titi", "prenom":"Sophie", "email":"info2@info.fr", "tel":"010203", "age":29},
    {"nom":"Toto", "prenom":"Paul", "email":"inf3o@info.fr", "tel":"010203", "age":49},
    {"nom":"Tutu", "prenom":"Marie", "email":"info4@info.fr", "tel":"010203", "age":33}
  ]

  detailBouton:boolean = true;

  cacherDetails():void
  {
    // if(this.detailBouton)
    // {
    //   this.detailBouton = false;
    // }
    // else
    // {
    //   this.detailBouton = true;
    // }
    this.detailBouton = !this.detailBouton;
  }

  saisie:string = "";

  oUtil: { nom: string; prenom: string; email: string; tel: string; age: number; } = 
  {"nom":"Test", "prenom":"Test", "email":"Test", "tel":"test", "age":24};

  ajouterUser():void
  {
    this.oUtil.nom = this.saisie;
    this.utilisateur.push(this.oUtil);
  }
}
