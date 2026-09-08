interface PaymentMethod {
  pagar(cantidad: number): void;
}

class Tarjeta implements PaymentMethod {
  pagar(cantidad: number): void {
    console.log(`Pagó ${cantidad} por tarjeta`)
  }
}

class Efectivo implements PaymentMethod {
  pagar(cantidad: number): void {
    console.log(`Pagó ${cantidad} en efectivo`)
  }
}

class Transferencia implements PaymentMethod {
  pagar(cantidad: number): void {
    console.log(`Pagó ${cantidad} por transferencia`)
  }
}

class PaymentProcessor {
  implementarPago(metodo: PaymentMethod, cantidad: number) {
    metodo.pagar(cantidad);
  }
}

const procesador = new PaymentProcessor();

procesador.implementarPago(new Tarjeta(), 100)
procesador.implementarPago(new Efectivo(), 100)
procesador.implementarPago(new Transferencia(), 100)
