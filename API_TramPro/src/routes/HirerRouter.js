const express = require('express');
const router = express.Router();

const hirerController = require('../controllers/hirerController');

router.get('/', hirerController.list);
router.get('/user/:id', hirerController.findByUserId);
router.get('/:id', hirerController.findById);
router.post('/', hirerController.create);
router.put('/:id', hirerController.update);
router.delete('/:id', hirerController.delete);


module.exports = router;