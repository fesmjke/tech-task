import {Router} from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/users', UserController.find);
router.get('/users/:id', UserController.findById);
router.post('/users', UserController.create);
router.delete('/users/:id', UserController.delete);

export default router;
