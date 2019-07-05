const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env
const aws = require('aws-sdk')

module.exports = {
    getFile: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { id } = req.params
            id = +id
            let storyUrl = await db.getFileUrlForSThree(id)
            aws.config = {
                region: 'us-west-1',
                accessKeyId: AWS_ACCESS_KEY_ID,
                secretAccessKey: AWS_SECRET_ACCESS_KEY
            }
            const s3 = new aws.S3()
            const fileName = storyUrl
            const fileType = req.query['file-type']
            const s3Params = {
                Bucket: S3_BUCKET,
                Key: fileName,
                Expires: 60,
                ContentType: fileType,
                ACL: 'public-read'
            }
            s3.getSignedUrl('putObject', s3Params, (err, data) => {
                if (err) {
                    console.log(err)
                    return res.end()
                }
                const returnData = {
                    signedRequest: data,
                    url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
                }
                return res.send(returnData)
            })

        } catch (error) {
            console.log('error getting file from s3', error)
            res.status(500).send(error)
        }
    }
}