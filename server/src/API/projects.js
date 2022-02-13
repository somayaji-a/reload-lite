import express from 'express';
import { getProjects, postProjects, putProjects, deleteProjects } from '../Services/projects/projects.js';
import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
const router = express.Router();

/* Get Todos */
router.get('/get/projects', requireAuth, asyncHandler(getProjects));

/* Post Todos */
router.post('/post/projects', requireAuth, asyncHandler(postProjects));

/* Edit Todo */
router.put('/put/projects', requireAuth, asyncHandler(putProjects));

/* Delete Todo */
router.delete('/delete/projects', requireAuth, asyncHandler(deleteProjects));

export default router;
