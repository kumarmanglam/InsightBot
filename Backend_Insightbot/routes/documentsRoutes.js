
const { Router } = require("express");

const { uploadDocs, deleteFile, getDocsByDeptController, getAllDocsController } = require('../controller/document.controller.js');
const router = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.delete('/deleteDocs', deleteFile);
router.post('/uploadDocs', upload.single('pdf'), uploadDocs);
router.get('/getAllDocs', getAllDocsController);

module.exports = router;
