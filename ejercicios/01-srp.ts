interface User {
  username: string;
  email: string;
}


class UserValidador {
  isValid(email: string): boolean {
    if (email.includes("@")) {
      return true;
    }
    return false;
  }
}

class UserRepository {
  users: User[] = [];
  register(username: string, email: string): void {
    this.users.push({ username, email });
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {
  userValidator: UserValidador;
  userRepository: UserRepository;
  emailService: EmailService;

  constructor(
    userValidator: UserValidador = new UserValidador(),
    userRepository: UserRepository = new UserRepository(),
    emailService: EmailService = new EmailService()
  ) {
    this.userValidator = userValidator;
    this.userRepository = userRepository;
    this.emailService = emailService;
  };

  newUser({ username, email }: User) {
    this.userValidator.isValid(email);
    this.userRepository.register(username, email);
    this.emailService.sendWelcomeEmail(email);
  }
}

const users = new UserRegistrationService();
users.newUser({ username: "Ramiro", email: "ramiroroman306@gmail.com" })

