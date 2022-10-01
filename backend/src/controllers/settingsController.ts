import { Request, Response, NextFunction } from "express";
import settingsService from "../services/settingsService";
import { defaultSchema } from "../forms/index";

class SettingsController {
  async createForm(req: Request, res: Response, next: NextFunction) {
    try {
      const { viewSchema } = req.body;
      const form = await settingsService.createSettings(
        JSON.stringify(viewSchema),
        ""
      );

      return res.json(form);
    } catch (err) {
      console.log(err);
    }
  }

  async getDefaultForm(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json(defaultSchema);
    } catch (err) {
      console.log(err);
    }
  }

  async getSettingsIds(req: Request, res: Response, next: NextFunction) {
    try {
      const ids = await settingsService.getSettingsIds();
      if (!ids) return res.status(404);

      return res.json(ids);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SettingsController();
