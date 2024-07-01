//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FWVWE1K1FkNVJha21Kd1h5SGxXY2k4TlkzVVdIT0hzT2NzQVU2dFBWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTNnUTlJd2pPamNsMDlnOXRuMHg2NEhRRm1BQmZVcnYvUmVUMm1MVi9DRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRFB3TW1WcElYdk5aQ21lano4eklCMEFCRjdwQ0oxQzBjR3ludTNaTkVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBM0lUYWtyNmJmaUNSWEhKR0JwTkVTZjV5U2FZNml3VklIQkgzZ1NDYVFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEWm9RclJvNVRVTjh3SnZFN0JqR2tmejMzN2VxclZiWGZRdjNCdXpLbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHWkRIWlFQd0NQTWpnWXFIVmhtUUt1djdlTXR5REZ5NzhOMm0rOVhvU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NHdDMzbjJFcTVIMVFQSXFGQ1ZxSDBvL1JKajJhWEdtVnUvZFZOdUZIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2Ntb0RWeld5TWdRNzZNNjBDR25oakQ3WjNMR1dnTjVZKzdsL2t4NlB4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVWeDhiOHRpS3A1RENSSzVTNWwzcFdxWlJ6MjRUaVpQY2h6QVpXR3dWR0IrbkxjNUFlWVQ5dTcxVUJXUjRJYk01QW0vWUthejdPVVhjUXlwbXp1SkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiI0ZDdOeXZZTlNNeGdzemNGMGJiclQ5bnk1dndPS2UycDVqd0UySFRycTZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJveV84T1I5ZlFOLWRHNlZ5SVdrcTZRIiwicGhvbmVJZCI6IjFjOWFhMTNmLTg5NzYtNDAwYy05ZTY5LWYzOGVkNmNjNmYyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwbk9RL3VreS9qREUvVjEvOWJQQTVWVDNpYWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam4wWmR2VWRjNTNJdmVDUWNPUVoxWkpUekNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdQOUJWNTI5IiwibWUiOnsiaWQiOiIyMTI2MjE0Njk2OTY6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWdvdXpvdWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tybDFPRUZFTktqaTdRR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBjODl2c2V4R0Uxc1BxMWNpY0tLQVVWWk5tMzJUYXlkMVhuOUZRNDhFUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik52WEZ2b1NHdlBXdG1Fd21DM0c4YjlTeU0xYzArbnJYUUJNL2RGandhNUhLNzhCaDVDd0FhNTNYQkhlK25sbDZHUitEU3krRVF3dXhRWWJ2UTEwUEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrUFM1R09MbU1TbzR1clhLa0RrT1VxRWc4SmtuTVZ2cFg3ZjN3T24vRTVkRVVGdDJpOVRISG1xUlJiQndyN08vdXA5d3ZwRVhQdlpkZkptNUV4ZDRDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjYyMTQ2OTY5NjoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWFBQYjdIc1JoTmJENnRYSW5DaWdGRldUWnQ5azJzbmRWNS9SVU9QQkVGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODQ5NDM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV6VSJ9"";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "212621469696";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©Saban_bot-V2`",
  author: process.env.PACK_AUTHER || "SABAN-BOT",
  packname: process.env.PACK_NAME || "S A B A N",
  botname: process.env.BOT_NAME || "SABAN_BOT-V2",
  ownername: process.env.OWNER_NAME || "AHMED SABAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "212621469696";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
