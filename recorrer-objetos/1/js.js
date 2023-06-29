let supermercado = {
    Papa: 2000,
    Arroz: 2500,
    Lentejas: 2000,
    Aceite: 7000
  };
  
  // Imprimir cada producto con su precio
  for (let producto in supermercado) {
    console.log(producto + ': $' + supermercado[producto]);
  }
  