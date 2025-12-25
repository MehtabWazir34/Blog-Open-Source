// import User from "../model/user.model.js"
import jwt from "jsonwebtoken"

// const authCheck = async (req, res, next) => {
//     try {
//         const header = req.headers["authorization"];

//         if (!header || !header.startsWith("Bearer ")) {
//             return res.status(403).json({ mssg: "Invalid Credentials" });
//         }

//         const token = header.split(" ")[1];
//         if (!token) {
//             return res.status(403).json({ mssg: "Invalid Credentials" });
//         }

//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET || "superSecret123");
//         if (!decoded) {
//             return res.status(403).json({ mssg: "Invalid Credentials" });
//         }

//         // Find user by ID from token
//         const user = await User.findById(decoded.id).select("-password");
//         if (!user) {
//             return res.status(403).json({ mssg: "Invalid Credentials" });
//         }

//         req.user = user;
        
//         next();
//     } catch (error) {
//         return res.status(403).json({ mssg: "Invalid or expired token" });
//     }
// };

// export default authCheck


import User from "../model/user.model.js";
// import {jwt} from 'jsonwebtoken';


const checkAuth = async(req, res)=>{
    try {
        let hdr = await req.headers['authorization']
        if(!hdr || !hdr.startsWith("Bearer ")){
            return res.status(420).json({
                AlertMSG:"SOmething invalide"
            });
        }

        let token = hdr.split('')[1];
        if(!token){
            return res.status(420).json({AlertMSG:"SOmthing invalide"})
        };

        let verfiedToken = jwt.verify(token, 'mysuperKey123');
        if(!verfiedToken){
            return res.status(420).json({AlertMSG:'SOmething invalide'})
        }
        let theUser = await User.findById(verfiedToken._id).select('-password');
        if(!theUser){
            return res.status(420).json({AlertMSG:'Somthing invalide'})
        }
        req.user = theUser;
        next();

    } catch (error) {
        console.error("Opps!", error);
        return res.status(420).json({
            AlertMSG: 'Something invalide'
        })
    }
}

export default checkAuth