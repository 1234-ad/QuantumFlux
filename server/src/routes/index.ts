import { Router } from 'express';
import authRoutes from './auth.routes';
import dashboardRoutes from './dashboard.routes';
import streamRoutes from './stream.routes';
import userRoutes from './user.routes';
import analyticsRoutes from './analytics.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/dashboards', dashboardRoutes);
router.use('/streams', streamRoutes);
router.use('/users', userRoutes);
router.use('/analytics', analyticsRoutes);

export default router;