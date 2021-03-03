import { Router } from "express";
import upload from "../middlewares/upload";
const router = Router();


router.post('/', upload, (req, res) => {
    res.send('uploaded')
})


export default router


