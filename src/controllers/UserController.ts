import { Request, Response } from 'express';
import { User } from '@models/User';
import UserService from '@services/UserService';

class UserController {
  async getUsers(req: Request, res: Response) {
    const user: User[] = await UserService.getUsers();
    return res.status(200).json(user);
  }

  async getUser(req: Request, res: Response) {
    const { idUser } = req.params;
    if (!idUser) return res.status(400).json({ error: 'idUser is missing' });

    const user: User = await UserService.getUser(idUser);
    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  }

  async addUser(req: Request, res: Response) {
    const { name, age } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is missing' });
    if (!age) return res.status(400).json({ error: 'Age is missing' });

    const user: User = await UserService.addUser(req.body);
    return res.status(200).json(user);
  }

  async updateUser(req: Request, res: Response) {
    const { idUser } = req.params;
    if (!idUser) return res.status(400).json({ error: 'idUser is missing' });

    const user: User = await UserService.updateUser(idUser, req.body);
    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const { idUser } = req.params;
    if (!idUser) return res.status(400).json({ error: 'idUser is missing' });

    const result = await UserService.deleteUser(idUser);
    return res.status(200).json(result);
  }
}

export default new UserController();