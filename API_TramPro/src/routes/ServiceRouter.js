const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.list);
router.get('/user/:id', serviceController.findByUserId);
router.get('/:id', serviceController.findById);
router.post('/', serviceController.create);
router.put('/:id', serviceController.update);
router.delete('/:id', serviceController.delete);


module.exports = router;