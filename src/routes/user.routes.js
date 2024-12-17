import {Router} from 'express';
import * as usersctrl from '../controllers/users.controller'
import { isAdminOrEmpleado, verifyToken } from '../middlewares/authjwt';

const router = Router();

router.get('/user/list',[verifyToken, isAdminOrEmpleado], usersctrl.get_user)
router.get('/user/:userId',[verifyToken, isAdminOrEmpleado], usersctrl.get_user_by_id)
router.post('/user/add',[verifyToken,isAdminOrEmpleado], usersctrl.add_user)
router.put('/user/update/:userId',[verifyToken,isAdminOrEmpleado], usersctrl.update_user)
router.delete('/user/delete/:userId',[verifyToken,isAdminOrEmpleado], usersctrl.del_user)


export default router;