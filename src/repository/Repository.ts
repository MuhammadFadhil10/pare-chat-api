import AuthRepository from "./AuthRepository";
import MessageRepository from "./Message.repository";
import UserRepository from "./User.repository";

export default class Repository {
  static Auth = AuthRepository;
  static User = UserRepository;
  static Message = MessageRepository;
}
