import mongoose from "mongoose"

export const dbconnect = async function connect() {
    mongoose.connect("mongodb://localhost:27017/apirest", {
}, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(db => console.log('Se conecto a la DB'))
.catch(error => console.log(error))
}
