const path = require('path');

const express = require('express');

const membersController = require('../controllers/members');

const router = express.Router();

router.get('/api/members', membersController.getMembers);

module.exports = router;
