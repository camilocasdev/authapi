import Usuario from '../models/user.js';
import jwt from 'jsonwebtoken';
import cfig from '../config.js'
import Role from '../models/role.js';


export const signIn = async (req, res) => {

    try {
        
        const usuarioEncontrado = await Usuario.findOne({correo: req.body.correo}).populate("role")


        if (!usuarioEncontrado) {
            return res.redirect('/?error=credenciales_invalidas')
        }

        const matchPass = await Usuario.comparePassword(req.body.contrasena, usuarioEncontrado.contrasena);
        
        if (!matchPass) {
            return res.redirect('/?error')
        }
        const token = jwt.sign({id: usuarioEncontrado._id}, cfig.SECRET_KEY, {
            expiresIn: 86400 // 1 dia
        });

        const cookieconfig = {
            expires: new Date(Date.now() + cfig.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000),
            path: "/"
        }

        res.cookie("tookie", token, cookieconfig); //Tookie es la fusión de Token y Cookie :D

        return(
            res.redirect('/postlog')
        )
    } catch (error) {
        console.log(error)
        res.status(500).redirect('/?error=login')
    }
};
    
export const signUp = async (req, res) => {

    const { nombre, apellido, contrasena, correo, telefono, role } = req.body;

    const nuevoUsuario = new Usuario({
        nombre,
        apellido,
        contrasena: await Usuario.encryptPassword(contrasena),
        correo,
        telefono, 
        role
    })

    if (role){
        const foundRoles = await Role.find({nombre:{$in: role}});
        nuevoUsuario.role = foundRoles.map(role => role._id);

        if (!nuevoUsuario.role.includes("usuario")){
            const defaultRole = await Role.findOne({nombre: 'usuario'});
            nuevoUsuario.role.push(defaultRole._id)
        }
    } else {
        const defaultRole = await Role.findOne({nombre: 'usuario'});
        nuevoUsuario.role = [defaultRole._id];
    }

    const emailFound = await Usuario.findOne({ correo: correo });

    if (emailFound) {
        return res.redirect('/register?error=email_existente');
    }

    const usuarioGuardado = await nuevoUsuario.save();


    jwt.sign({id: usuarioGuardado._id}, cfig.SECRET_KEY, {
        expiresIn: 864000 //24 Horas
    });

    res.redirect('/') //Redirige al inicio de sesión 
    
};


export const logout = async (req, res)  => {
    res.clearCookie('tookie');
    return(
        res.redirect('/')
    )
}
