
import { Request, Response } from 'express';
import User from '../models/User';

export const fixShelendra = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: 'fastchouhan2022@gmail.com' },
      { $set: { officeEndTime: '18:30' } },
      { new: true }
    );
    res.json({ message: 'Fixed', user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

