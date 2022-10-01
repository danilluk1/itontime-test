import { Request, Response, NextFunction, response } from "express";
import rsvpService from "../services/rsvpService";

class RsvpController {
  async getRsvps(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if(!id) return res.status(404);

      const rsvps = await rsvpService.getRsvps(id);
      return res.json(rsvps);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteRsvp(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const r = await rsvpService.deleteRsvp(id);
      if (!r) return res.status(400);

      return res.json({
        status: "success",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateRsvp(req: Request, res: Response, next: NextFunction) {
    try {
      const { rsvp } = req.body;
      await rsvpService.updateRsvp(rsvp);

      return res.json({
        status: "success",
      });
    } catch (err) {
      console.log(err);
    }
  }

  async createRsvp(req: Request, res: Response, next: NextFunction) {
    try {
      const { schema, data } = req.body;
      const rsvp = await rsvpService.createRsvp(schema, data);

      return res.json({
        rsvp: rsvp,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new RsvpController();
