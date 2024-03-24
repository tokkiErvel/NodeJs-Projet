const express = require('express');
const router = express.Router();
const dataController = require('../Controller/dataController');

router.get('/appartement', dataController.getAllData);
router.get('/appartement/:idApp', dataController.getDataById);
router.post('/appartement/add', dataController.addData)
router.delete('/appartement/:idApp', dataController.deleteData);
router.put('/appartement/:idApp', dataController.updateData);

router.get('/minLoyer', dataController.getMinLoyer);
router.get('/maxLoyer', dataController.getMaxLoyer);
router.get('/sumLoyer', dataController.getSumLoyer);

module.exports = router;