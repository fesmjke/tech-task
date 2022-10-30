import {Router as rt} from 'express';
import UserController from '../controllers/UserController';

const router = rt();

router.get('/users', UserController.find);
router.get('/users/:id', UserController.findById);
router.post('/users', UserController.create);
router.delete('/users/:id', UserController.delete);

export default router;
