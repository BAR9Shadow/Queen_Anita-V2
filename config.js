//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUI4MUZjVURKaFRiTURjNzNxeExYSEhWc2I0QXJnZFNLK3BhM0xEOXdIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXZyNUhiMHJHWUpjd1ZHeVA0MHFHdDR4aXFrMzRsWWdIVmFNOXNNYmFTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQkRxSVRUYmx5NHVUa2JTRThXU1pjMWdiMWJreEVPZVZaZDdYdVA0V2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WkNyQVNNOEJMTVB4UkttZ0dYaytQc2pRKytwZmpsNnlUNDRDU0ZuVHlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNalhWMGxJaFFrbVVVdk56OHZKWDd5TnFPWlMvY0lYd2JQbnV0NzVCMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNlOUZ6U1llMlZQOHdYbmhYdmErVDdGVk5ldXZXbHpGdjY2MGRiK2dJQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEE4NTBmQ0ZIMmo5MUI4VEw2Z2tGOVhoZ3YxcHBHNHRZUjRkQmk2UU1WYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFV5OUkxRHRJNGphNnh1MDNZZDEreWdaQytheTlwRXZENFpvdEdzTWMyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE0UnFBenNVanQ2VEdGVmJ6S2lDQU5uUHpvNURUdytHcGFkMEl4alJtNjdTcTJFeWhWLzZhNFBRVGpuZzUzeU5lakxBbWVjZGhOdW1TdDhYb2ZOVkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJqcjdjNVpleCs2UTQwN0tRQ0h1M3RVNFdMZDVUYkZEWFZlT3BqRWR0dWQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCTFZJRWRNWlFvV096bGlxNE1TWWJ3IiwicGhvbmVJZCI6ImRlY2MyNGE4LWEzYmItNDUxMS04ZjkwLTk2NTM1MzA0OGJmZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzZ3RCSXdFbVlPTUs4Q1ZFcDBRTitJR1g5S2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1B3RGZTeXJGVkFBMjZDejVyNnNkMVZxYjlZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldSQlFGQ0c2IiwibWUiOnsiaWQiOiIyMTI2MjE0Njk2OTY6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FiYW4gT3duZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tybDFPRUZFT2ZCakxRR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBjODl2c2V4R0Uxc1BxMWNpY0tLQVVWWk5tMzJUYXlkMVhuOUZRNDhFUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlKcnFWUmdVZmpzNEdSZk93M1JKSkFra0NlMCt6dkQ1cDZUQTBYbWFYdDRBVnZ0RDdncThBYkNkajcyNWVUYzBKTzJ6MUNBTG1aOVR5VjA5b1VXMUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEenpSYVRvcWk2SmFKVUl0RlVWSlErdDQ1dXlwVXYyNHBLb2l1d2srSWpsZWdEdDlmQXNIV1RyMFNuU3FaWVRoZ25mVitGYmR6VzBDRHNoRHpSVmhCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjYyMTQ2OTY5NjoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWFBQYjdIc1JoTmJENnRYSW5DaWdGRldUWnQ5azJzbmRWNS9SVU9QQkVGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODY5NjgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV6YyJ9";
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
  caption: process.env.CAPTION || "`©SABAN_BOT-V2`",
  author: process.env.PACK_AUTHER || "SABAN_BOT-V2",
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
