import mongoose from "mongoose";

const myDBConnection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/myBlogApp');
        console.log('DB Connected ✅');
        
    } catch (error) {
        console.error('Hmm, something wrong ❌', error)
        // process.exit(1)
    }
}
export default myDBConnection()