interface Notifier {
  send(to: string, message: string): void;
}

class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}


class SmsSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS para ${to}: ${message}`)
  }
}
class OrderService {
  private notifier: Notifier;

  constructor(notificador: Notifier) {
    this.notifier = notificador;
  }

  createOrder(customerContact: string): void {
    console.log("Pedido creado");

    this.notifier.send(customerContact, "Tu mensaje fue creado exitosamente")
  }
}

const emailNotifier = new EmailSender()

const orderWithEmail = new OrderService(emailNotifier);
orderWithEmail.createOrder("ramiroroman306@gmail.com")
