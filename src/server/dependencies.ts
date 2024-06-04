import { UserRepository } from '../user/infraestructure/userRepository.js';
import { CreateUser } from '../user/application/create.js';
import { CreateUserController } from '../user/infraestructure/controllers/createController.js';
import { Hash } from '../services/hash.js';
import { LoginController } from '../user/infraestructure/controllers/loginController.js';
import { LoginUser } from '../user/application/login.js';
import { JWTservice } from '../services/jwt.js';

const userRepository = new UserRepository();

const hashService = new Hash();
const jwtService = new JWTservice();

const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hashService, jwtService);
export const loginController = new LoginController(loginUser);
