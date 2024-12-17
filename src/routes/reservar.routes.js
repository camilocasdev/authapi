import {Router} from 'express';
import * as reservactrl from '../controllers/reserva.controller.js';
import { verifyToken, isAdmin, isEmpleado, isUsuario, isAdminOrEmpleado } from "../middlewares/authjwt.js";

const router = Router();

router.get('/', [verifyToken, isAdminOrEmpleado] , reservactrl.getReserva)
router.get('/:reservaId', [verifyToken], reservactrl.getReservaId) // Operación por ID
router.post('/new', [ verifyToken , isUsuario], reservactrl.createReserva)
router.put('/:reservaId', [verifyToken, isAdminOrEmpleado], reservactrl.updateReserva) // Operación por ID
router.delete('/:reservaId', [verifyToken, isAdminOrEmpleado] ,reservactrl.deleteReserva) // Operación por ID

export default router;