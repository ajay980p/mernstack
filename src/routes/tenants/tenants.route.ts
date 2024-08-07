import express, { Request, Response, NextFunction } from 'express';
import { TenantController } from '../../controllers/TenantController';
import { TenantService } from '../../services/TenantService';
import logger from '../../config/logger';
import { createTenantValidator, deleteTenantValidator, updateTenantValidator } from '../../validators/tenant-validators';
import { CreateTenantRequest } from '../../types';
const router = express.Router();

const tenantService = new TenantService();
const tenantController = new TenantController(tenantService, logger);

router.post('/create_tenants', createTenantValidator, (req: CreateTenantRequest, res: Response, next: NextFunction) => {
    tenantController.createTenant(req, res, next);
});


router.post('/update_tenants', updateTenantValidator, (req: CreateTenantRequest, res: Response, next: NextFunction) => {
    tenantController.updateTenant(req, res, next);
});


router.post('/delete_tenant', deleteTenantValidator, (req: Request, res: Response, next: NextFunction) => {
    tenantController.deleteTenant(req, res, next);
});


router.post('/get_all_tenant', (req: Request, res: Response, next: NextFunction) => {
    tenantController.getAllTenants(req, res, next);
});


export default router;