import express from 'express';
import {uploadImage, downloadImage} from '../controllers/image-controller.js'
import upload from '../utils/upload.js';

const router = express.Router();

// 3-arument 1-end point, 2- middleWare,3- callback function

router.post('/upload', upload.single('file') ,uploadImage);
router.get('/file/:fileId', downloadImage);
export default router