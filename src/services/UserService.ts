import { DeleteResult, getRepository, Repository } from 'typeorm';
import { User } from '@models/User';
import dayjs from 'dayjs';

class UserService {
  async getUsers() {
    const userRepository: Repository<User> = getRepository(User);
    const users: User[] = await userRepository.find();

    return users;
  }

  async getUser(idUser: string) {
    const userRepository: Repository<User> = getRepository(User);
    const user: User = await userRepository.findOne(idUser);

    return user;
  }

  async addUser(user: User) {
    const userRepository: Repository<User> = getRepository(User);

    return userRepository.save(user);
  }

  async updateUser(idUser: string, user: User) {
    try {
      const userRepository: Repository<User> = getRepository(User);
      user.updatedAt = dayjs().toDate();
      await userRepository.update(idUser, user);

      const updatedUser: User = await userRepository.findOne(idUser);

      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteUser(idUser: string) {
    const userRepository: Repository<User> = getRepository(User);
    const deleteResult: DeleteResult = await userRepository.delete(idUser);

    return deleteResult;
  }
}

export default new UserService();