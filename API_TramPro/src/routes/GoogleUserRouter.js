const express = require('express');
const router = express.Router();

const googleUserController = require('../controllers/googleUserController');

router.get('/', googleUserController.list);
router.get('/:id', googleUserController.findById);
router.post('/', googleUserController.create);
router.put('/:id', googleUserController.update);
router.delete('/:id', googleUserController.delete);


module.exports = router;