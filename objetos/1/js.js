class Perro {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    ladrar() {
      console.log("¡Woof!", this.nombre);
    }
  }
  
  
  let nom = new Perro("Luna");
  nom.ladrar();
  