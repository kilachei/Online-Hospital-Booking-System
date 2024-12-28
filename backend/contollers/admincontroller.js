import validator from 'validator'
import bycrypt from  'bycrypt'
import { v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
// API for adding doctors

const addDOctor = async(req, res)=> {
    try {
        const { name, email, speciality, about, password, image,degree, experience, available ,fees,address,date,slots_booked } = req.body
        const imageFile = req.file

        //checking for all data to add doctor

        if (!name || !password ||! email ||!speciality || !fees||!speciality||!experience||!about||!address||!available||!date||!slots_booked||!image)
            return res.json({success:false,message:"Missing Details"})

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid Email"})
        }

        // validating strong password
        if (password.length < 8){
            return res.json({success:false,message:"Please enter a strong password"})
        }
        // hashing doctor password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await  bycrypt.hash(password,salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageurl = imageUpload.secure_url

        const doctorData = {
            name,
            image:imageurl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.sav()

        res.json({success:true,message:"Doctor Added"})


    
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

//API FOR ADMIN LOGIN
const loginAdmin = async (res,req) =>{
    try {
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

export {addDOctor,loginAdmin}