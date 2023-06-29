let info= {"dos": 2,
    "cinco": 5, 
    "siete": 7, 
    "cuarenta": 40,
    "cincuenta": 50
};

for (let par in info) {
    let valor = info[par];
    
    if (valor % 2 == 0) {
      console.log(par);
    }
  }