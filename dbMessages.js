import mongoose from 'mongoose';

const wpappSchema = mongoose.Schema({
    message : String,
    name:String,
    timestamp: String,
    recieved : Boolean,
});

export default mongoose.model('messageContent',wpappSchema);