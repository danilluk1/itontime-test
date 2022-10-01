import SettingsModel from "../models/settingsModel";

class SettingsService {
  async createSettings(viewSchema: any, settingsSchema: any) {
    try {
      const doc = new SettingsModel({
        viewSchema,
        settingsSchema,
      });
      const form = await doc.save();
      return form;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getSettingsIds() {
    try{
      const ids = await SettingsModel.find().distinct('_id');
      return ids;
    }
    catch(err){
      return null;
    }
  }
}

export default new SettingsService();
