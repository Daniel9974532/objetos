let objeto ={
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    };

    for (let clave in objeto) {
       for (let i in objeto[clave]) {
           
        console.log(i,objeto[clave][i]);
               
           }
       }