import { Router, Request, Response } from 'express';
import { User } from '../entity/User';
import { getRepository } from 'typeorm';

const router: Router = Router();

async function getUserList(req: Request, res: Response) {
    
    const list = await getRepository(User).find();
    return res.json(list);
}

async function getUser (req: Request, response: Response) {

    const user = await getRepository(User).findOne(req.params.id)
    return response.json(user);
}

router.route('/').get(getUserList);
router.route('/:id').get(getUser);

export const UsersRouter = {
    path: '/api/users',
    router
};
