import express from 'express'
import { addDOctor,loginAdmin } from '../contollers/admincontroller.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDOctor)
adminRouter.post('/login',loginAdmin)

export default  adminRouter