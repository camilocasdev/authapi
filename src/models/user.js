import {model, Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema ({
    nombre:{
        type:String
    },
    apellido:{
        type:String
    },
    contrasena:{
        type:String,
    },
    correo:{
        type:String,
        unique:true
    },
    telefono: {
        type:Number
    },
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
}
)

usuarioSchema.statics.encryptPassword = async (contrasena) => {
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(contrasena, salt);
}

usuarioSchema.statics.comparePassword = async (contrasenaIng, contrasenaGuard) => {
    return await bcrypt.compare(contrasenaIng, contrasenaGuard);
}

export default model('Usuario', usuarioSchema);