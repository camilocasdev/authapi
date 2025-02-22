import {Router} from 'express';
import path from 'path';

const router = Router();
const basePath = path.resolve('.')


router.get('/', (req, res) => { 
    res.sendFile(path.join(basePath, "src", "pages", "login.html"))
});
router.get('/register', (req, res) => { 
    res.sendFile(path.join(basePath, "src", "pages", "signup.html"))
})
router.get('/postlog', (req, res) => { 
    res.sendFile(path.join(basePath, "src", "pages", "postlog.html"))
})


export default router;