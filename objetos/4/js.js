class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
    console.log("Se depositaron ",cantidad, "Saldo actual: ", this.saldo);
  }
}

const miCuenta = new CuentaBancaria("Veronica");

miCuenta.depositar(100);