import {Router} from 'express';
import * as authctrl from '../controllers/auth.controller.js';

const router = Router();


router.post('/signin', authctrl.signIn)
router.post('/signup', authctrl.signUp)
router.post('/logout', authctrl.logout)
export default router;