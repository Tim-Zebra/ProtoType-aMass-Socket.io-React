import mongoose from 'mongoose'
const Schema = mongoose.Schema

const objRef = Schema.Types.ObjectId

const messageSchema = new Schema({
    sender: {
        type: objRef,
        ref: 'Profile',
        required: true
    },
    msgContent: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    readBy: [{
        type: objRef,
        ref: 'Profile',
        required: true
    }]
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
    dialogueName: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Dialogue = mongoose.model('Dialogue', dialogueSchema)

export { Dialogue }