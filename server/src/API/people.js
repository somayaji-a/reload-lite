import express from 'express';
import { getPeople, postPeople, putPeople, deletePeople } from '../Services/people/people.js';
import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
const router = express.Router();

/* Get People */
router.get('/get/people', requireAuth, asyncHandler(getPeople));

/* Post People */
router.post('/post/people', requireAuth, asyncHandler(postPeople));

/* Edit People */
router.put('/put/people', requireAuth, asyncHandler(putPeople));

/* Delete People */
router.delete('/delete/people', requireAuth, asyncHandler(deletePeople));

export default router;
