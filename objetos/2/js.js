class Perro {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    ladrar() {
      console.log("¡Woof!");
    }
  }
  
  const miPerro = new Perro("Luna");
  
  miPerro.ladrar();
  