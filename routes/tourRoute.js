const express = require('express');

const tourController = require('./../controllers/tourController');

const { getAllTours, createTour, getTour, updateTour, deleteTour } =
  tourController;

const router = express.Router();

// router.param('id', checkID);

// Create a checkBody MiddleWare
// Check if body contains the name and price property
// if not, send back a 400 (Bad request)

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
