import Router from "express";
import rsvpController from "../controllers/rsvpController";

export const rsvpRouter = Router();

rsvpRouter.get("/rsvps/:id", rsvpController.getRsvps);
rsvpRouter.post("/rsvps", rsvpController.createRsvp);
rsvpRouter.delete("/rsvps/:id", rsvpController.deleteRsvp);
rsvpRouter.patch("/rsvps", rsvpController.updateRsvp);