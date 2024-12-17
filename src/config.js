export default{
    SALT_PRODUCTION: 10, //Podemos configurar el numero de vueltas que puede hacer el hash de Dcrypt para encriptar nuestras variables.
    SALT_DEVELOPMENT: 5, //en este caso elegimos una más corta para cuando se este desarrollando para que no se relentize el proceso 
    SECRET_KEY: 'esta-es-la-secret-key-y-debe-ser-larga-y-secreta-podemos-usar-signos-@@-y-numero'
    }