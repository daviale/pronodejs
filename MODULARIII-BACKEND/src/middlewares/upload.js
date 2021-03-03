import crypto from 'crypto'
import multer from 'multer'
import path from 'path'
import AWS from 'aws-sdk'
// require('dotenv/config')
import 'dotenv/config'

export const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})


// directorio
const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '')
    }
})


const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}
}).single('imgURL')

export default upload