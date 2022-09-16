import mongoose from 'mongoose'
const Schema = mongoose.Schema

const objRef = Schema.Types.ObjectId

const profileSchema = new mongoose.Schema({
  user: {
    type: objRef,
    ref: 'User',
    required: true
  },
  firstName: {
    type: String,
    required: true
  }, 
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Tenant', 'Property Manager', 'Property Owner', 'Vendor'],
    required: true
  },
  permissionVal: {
    type: Number,
    min: 100,
    max: 900
  },
  // applications: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Applications',
  //   required: false
  // }],
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
