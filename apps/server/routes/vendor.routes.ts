import { Router } from "express";
import batchController from "../controller/vendor.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, batchController.createVendor);
router.get("/", authMiddleware, batchController.getAllVendors);
router.get("/:id", authMiddleware, batchController.getVendorById);
router.put("/:id", authMiddleware, batchController.updateVendor);
router.delete("/:id", authMiddleware, batchController.deleteVendor);

export default router;
