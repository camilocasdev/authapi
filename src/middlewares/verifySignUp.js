import {Role} from '../models/role';
import Usuario from '../models/user';



export const checkExisteRol = (req, res, next) => {
    if (req.body.role) {
        for (let i = 0; i < req.body.role.length; i++){
            if (!Role.include (req.body.role[i])) {
                res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exist`
                });
            }
        }
    }
}