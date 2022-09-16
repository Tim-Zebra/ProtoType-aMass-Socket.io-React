import mongoose from 'mongoose'
const Schema = mongoose.Schema

const objRef = Schema.Types.ObjectId

const messageSchema = new Schema ({
    sender: {
        type: objRef,
        ref: 'Profile',
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
  })


const dialogueSchema = new Schema({
    participants: [{
        type: objRef,
        ref: 'Profile',
        required: true
    }],
    messages: [messageSchema],
    property: {
        type: objRef,
        ref: 'Property',
        required: false
    } 
}, {
  timestamps: true,
})

const Dialogue = mongoose.model('Dialogue', dialogueSchema)

export { Dialogue }