const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/', 
    authMiddleware, /* req.user = userdata */
    upload.single("image-file"), 
    createPostController
)

module.exports = router;