import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  public name : string = "FRANCISCO ";
  public age : number = 33;
  btnDisable = true ;
  newName : string = "";
  person = {
   age:18 ,
   name : "francisco",
   imagen : "",

  }

  public toggleButton(){
    this.btnDisable = !this.btnDisable
    this.person.age += 1

  }
  public onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  public changeText(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value

  }

  names: string [] =[
    'francisco',
    'nico',
    'santi',
    'juli'
  ]
  public addName(){
    this.names.push(this.newName);
    this.newName ='';
  }
  public deleteName(index:number){
    this.names.splice(index);
  }
}

//string-interpolation = enviar y redenrizar variables desde nuestro componente
// property binding = Modificar info desde el controlador
//events = asignacion de funciones a propiedades de una etiqueta en html
// Data [(binding)] = El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.ngModel usar tanto los corchetes [] como los paréntesis (). De esta manera, se vuelve bidireccional el intercambio de datos. Si no quieres la bidirección, solo colocamos los corchetes [ngModel] para que la comunicación sea unidireccional.Para utilizar ngModel, es necesario hacer uso e importar Angular Forms. Para esto, dirígete al archivo app.module.ts que es el módulo principal de toda aplicación Angular
// *ngIf







