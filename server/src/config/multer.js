const multerS3 = require('multer-s3')
const crypto = require('crypto')
const aws = require('aws-sdk')

module.exports = {
  storage: multerS3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
            if(err) cb(err)

            const fileName = `${hash.toString('hex')}-${file.originalname}`

            cb(null, fileName)
        })
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'application/pdf',
        'application/zip'
    ];

    if(allowedMimes.includes(file.mimetype)){
        cb(null, true)
    } else {
        cb(new Error('Invalid file type.'))
    }
  }
}

