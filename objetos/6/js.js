class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
    
  }

  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log("Se a retirado la cantidad de ",cantidad," Saldo actual: ",this.saldo);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const miCuenta = new CuentaBancaria("Veronica");
miCuenta.depositar(100);
miCuenta.retirar(50);