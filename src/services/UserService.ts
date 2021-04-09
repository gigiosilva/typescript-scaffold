import { DeleteResult, getRepository, Repository } from 'typeorm';
import { User } from '@models/User';
import dayjs from 'dayjs';

class UserService {
  async getUsers() {
    const userRepository: Repository<User> = getRepository(User);
    const users: User[] = await userRepository.find();

    return users;
  }

  async getUser(userId: string) {
    const userRepository: Repository<User> = getRepository(User);
    const user: User = await userRepository.findOne(userId);

    return user;
  }

  async addUser(user: User) {
    const userRepository: Repository<User> = getRepository(User);

    return userRepository.save(user);
  }

  async updateUser(userId: string, user: User) {
    try {
      const userRepository: Repository<User> = getRepository(User);
      user.updatedAt = dayjs().toDate();
      await userRepository.update(userId, user);

      const updatedUser: User = await userRepository.findOne(userId);

      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteUser(userId: string) {
    const userRepository: Repository<User> = getRepository(User);
    const deleteResult: DeleteResult = await userRepository.delete(userId);

    return deleteResult;
  }
}

export default new UserService();