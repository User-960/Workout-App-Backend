import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	createNewWorkout,
	deleteWorkout,
	getAllWorkouts,
	getSingleWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getAllWorkouts)
router
	.route('/:id')
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout)
	.get(protect, getSingleWorkout)

export default router