const username:string | number = "francisco ramirez";

const suma =  (a:number, b:number)=>{
  return a+b;
}

suma( 1,2);


///Creando una clase con contructor example1
class Person1 {
  private age : number;
  public lastname : string;

  constructor(age:number,lastname:string){
    this.age = age;
    this.lastname = lastname;
  }
}
///Creando una clase con contructor example2
class Person2 {


  constructor(public age:number,private lastname:string){

  }
}




///creando una instancia de una clase
const francisco = new Person1(33,"ramirez")

console.log(francisco.lastname);








