
const express = require('express');
const router = express.Router();
const { startChat, conversation } = require('../controller/conversationController');

router.post('/conversation', conversation);

module.exports = router;

