import jwt from 'jsonwebtoken'

//Admin Authentication middleware

const authAdmin = async (res,req,next) => {
    try {
        const {atoken} = req.headers
        if (!atoken){
            return res.json({succes:false,message:'Not Authorized  Login Again'})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)
        
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({succes:false,message:'Not Authorized  Login Again'})
        }

        next()
        // changes

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default authAdmin 