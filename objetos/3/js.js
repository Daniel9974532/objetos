class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += 4000;
    console.log("titular", this.titular, " saldo " ,this.saldo);
  }
}

const miCuenta = new CuentaBancaria("Pepito");
miCuenta.depositar()