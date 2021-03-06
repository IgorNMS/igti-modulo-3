import express from "express";
import ClientController from "../controllers/client.controller.js"

const router = express.Router();

router.post("/newClient", ClientController.createClient);

export default router;