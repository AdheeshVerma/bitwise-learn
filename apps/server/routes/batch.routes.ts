import { Router } from "express";
import batchController from "../controller/batch.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, batchController.createBatch);
router.get("/", authMiddleware, batchController.getAllBatches);
router.get("/:id", authMiddleware, batchController.getBatchById);
router.put("/:id", authMiddleware, batchController.updateBatch);
router.delete("/:id", authMiddleware, batchController.deleteBatch);

export default router;
