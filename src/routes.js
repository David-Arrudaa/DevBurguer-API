import { Router } from 'express'
import User from './app/models/User'
import { v4 } from 'uuid'


const routes = new Router()

routes.get('/', async (req, res) => {
    const user = await User.create({
        id: v4(),
        name: 'David2',
        email: 'david2@gmail.com',
        password_hash: '12345'
    })

    return res.status(201).json(user);
})

export default routes