import {Schema, model} from "mongoose"

const SettingsSchema = new Schema({
  viewSchema: {type: String, required: true},
  settingsSchema: {type: String, required: false}
});

export default model("Settings", SettingsSchema);