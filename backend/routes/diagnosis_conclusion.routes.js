const Diagnosis_conclusionController = require('../controllers/diagnosis_conclusion.controller');
const MiddlewareUtils = require('../utils/middleware.utils');
const express = require('express');
const router = express.Router();

router.get('/', MiddlewareUtils.validateUser, Diagnosis_conclusionController.getConclusions);
router.get('/:id', MiddlewareUtils.validateUser, Diagnosis_conclusionController.getConclusion);
router.post('/', MiddlewareUtils.validateUser, Diagnosis_conclusionController.createConclusion);
router.put('/:id', MiddlewareUtils.validateUser, Diagnosis_conclusionController.updateConclusion);
router.delete('/:id', MiddlewareUtils.validateUser, Diagnosis_conclusionController.deleteConclusion);

module.exports = router;
