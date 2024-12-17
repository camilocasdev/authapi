import jwt from 'jsonwebtoken';
import cfig from '../config';
import Usuario from '../models/user';
import Role from '../models/role';

export const verifyToken = async (req, res, next) => {

    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({msg: "No token provided"}) //Limita la información o la ruta para los que no tienen un token, es decir un usuario no registrado o logeado

    try {
        const decoded = jwt.verify(token, cfig.SECRET_KEY); //Verifica el token
        req.UsuarioId = decoded.id;

        const usuario = await Usuario.findById(req.UsuarioId, {contrasena: 0});

        if (!usuario) return res.status(404).json({message: 'Usuario no encontrado'});

        next();

    } catch (error) {
        res.status(404).json('Error inesperado')
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);
    const role = await Role.find({_id: {$in: user.role}});  

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "admin") {
            return next();
        }
    }
    
    return res.status(403).json({message: "Requiere perfil de administrador"});
}


export const isUsuario = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);

    console.log("isEmpleado verifying...")

    const role = await Role.find({_id: {$in: user.role}});

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "usuario"){
        next()
        return;
        }
        }

    return res.status(403).json({message: "Error de lógica: Requiere perfil de Usuario"})
    
}
export const isEmpleado = async (req, res, next) => {
    const user = await Usuario.findById(req.UsuarioId);
    const role = await Role.find({_id: {$in: user.role}});

    for (let i = 0; i < role.length; i++) {
        if (role[i].nombre === "empleado"){
        next()
        return;
        }
        }

    return res.status(403).json({message: "Requiere perfil de empleado"})
}

//[MEJORAR] Trabajar en hacer verificaciones individuales y no combinadas en una función...

export const isAdminOrEmpleado = async (req, res, next) => {
    try {
        const user = await Usuario.findById(req.UsuarioId);
        const roles = await Role.find({ _id: { $in: user.role } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].nombre === "admin" || roles[i].nombre === "empleado") {
                return next(); // Si tiene el rol admin o empleado, continúa
            }
        }

        // Si no cumple con ninguno de los roles, retorna error
        return res.status(403).json({ message: "Requiere perfil de administrador o empleado" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};