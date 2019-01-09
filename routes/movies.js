const express = require('express');
const router = express.Router();

const movieController = require ('../app/api/controllers/movieController');

router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovies);
router.get('/:movieId', movieController.getById);
router.put('/:movieId', movieController.updateById);
router.delete('/:movieId', movieController.deleteById);

module.exports = router;