import express, { Request, Response, NextFunction } from 'express';
import { TenantController } from '../../controllers/TenantController';
import { TenantService } from '../../services/TenantService';
import logger from '../../config/logger';
import { createTenantValidator, deleteTenantValidator, getAllTenantsDataValidator, updateTenantValidator } from '../../validators/tenant-validators';
import { CreateTenantRequest } from '../../types';
import { authenticate } from '../../middlewares/authenticate';
import { canAccess } from '../../middlewares/canAccess';
import { Roles } from '../../constants/constant';
const router = express.Router();

const tenantService = new TenantService(logger);
const tenantController = new TenantController(tenantService, logger);

router.post('/createTenant', authenticate, createTenantValidator, (req: CreateTenantRequest, res: Response, next: NextFunction) => {
    tenantController.createTenant(req, res, next);
});


router.post('/update_tenants', authenticate, updateTenantValidator, (req: CreateTenantRequest, res: Response, next: NextFunction) => {
    tenantController.updateTenant(req, res, next);
});


router.post('/delete_tenant', authenticate, deleteTenantValidator, (req: Request, res: Response, next: NextFunction) => {
    tenantController.deleteTenant(req, res, next);
});


router.post('/getAllTenantsList', authenticate, getAllTenantsDataValidator, canAccess([Roles.ADMIN, Roles.MANAGER, Roles.CONSUMER]), (req: Request, res: Response, next: NextFunction) => {
    tenantController.getAllTenants(req, res, next);
});





export default router;