import RsvpModel from "../models/rsvpModel";
import mongoose from "mongoose";
class RsvpService {
  async getRsvps(id: string) {
    console.log(id);
    const rsvps = await RsvpModel.find({ schema: id }).populate("schema");
    console.log(rsvps);
    return rsvps;
  }

  async deleteRsvp(id: string) {
    try {
      await RsvpModel.findByIdAndDelete(id);
      return id;
    } catch (err) {
      return null;
      console.log(err);
    }
  }

  async createRsvp(schemaId: any, data: any) {
    const dataStr = JSON.stringify(data);
    const doc = new RsvpModel({
      schema: schemaId,
      data: dataStr,
    });
    const rsvp = await (await doc.save()).populate("schema");

    return rsvp;
  }

  async updateRsvp(rsvp: any) {
    try {
      console.log(rsvp);
      rsvp.data = JSON.stringify(rsvp.data);
      await RsvpModel.updateOne(
        { _id: rsvp._id },
        { schema: rsvp.schema, data: rsvp.data }
      );
      return rsvp;
    } catch (err) {
      return null;
    }
  }
}

export default new RsvpService();
