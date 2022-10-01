import Router from "express";
import settingController from "../controllers/settingsController";

export const settingsRouter = Router();

settingsRouter.get("/defaultSchema", settingController.getDefaultForm);
settingsRouter.get("/settings", settingController.getSettingsIds);
settingsRouter.post("/settings", settingController.createForm);
settingsRouter.delete("/settings/:id", settingController.createForm);
settingsRouter.patch("/settings", settingController.createForm);