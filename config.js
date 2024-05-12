//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/";
global.gurl = process.env.GURL || "https://i.imgur.com/P37NWrz.jpeg";
global.website = process.env.GURL || "https://i.imgur.com/P37NWrz.jpeg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "27672633675";
global.sudo = process.env.SUDO || "27672633675";
global.owner = process.env.OWNER_NUMBER || "27672633675";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Astropeda;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JEN0Q0L0FyRjNtbEdJOWdKNmY2YWhrRWJkYzRqQXZ3anUyWFkwRDlrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2kzUzRRcjlNNlliUUtMRGRTVGJQbGpmMG5KNWtTMW42dng1TFlIU2p4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUHlYS2ZUeGdOb2hyTlFHdXlqOXhrUG9tSkZGbnYvNzhabTR2TE50dkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcWVTeVpzenI3d1hyb1NnS2NIQWRXLzJpVS8wcnRWcjJ2c2ZWN2FscUIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOWHVxSmZBTjRMOTQ0T3g5aklXOUFSeHdZam1abXV5dnoyRTZDQ1o2Mk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdhcE53U09Ici9rdGE5d2lIWUNETEZoS1F2dnNSY0dJczdUelc2aThPbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZOL29YQlVJNzFHeGlTTjh0QisrclROM1dhaHpsYnFCb2o4S000TTVYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkpCWFpGVnZRSmVGMmFEYjZFNFdYODA2K3RQQzVhM21CS0dVTjBzWmZqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR0YzYrSHdldFhjYi90THZGOEhzaFVMMzdyWTF1VDgxN0w5eWhPNkJuREF5Vk1XNnZTcWV5Z2ptNFhDTFcwNmtNRlBrcHZhbk5EemFWY1dkalRZRENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6InVxK1Y3c1ZQY25tYzFrZjRkZDNEWEljZzBWUlJPdWxaSCtHN0MvVitscHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzMyOTkyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTE2RjMxQjMxM0I0QzIzQzUyRjFFNDBGNkRCRDBCNTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTUxNzg0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzMyOTkyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTMwODAzQTg3OUE1REE2MkNFMDBFMUEyMjY3MTRGQUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTUxNzg0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzMyOTkyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUM0REU2Nzk1MEY3RTYzNUI3MTE5Q0NBQzk1RjI1NTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTUxNzg0M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzMyOTkyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUNERjkxM0IzQkFCQjA1NjBBQzhCQTkxOTZCMkJBMjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNTUxNzg0M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUVhCeGlXRXZTTVdKX2tYM0hPSWtMUSIsInBob25lSWQiOiI3ZmRkNDEyZS1kYTAwLTQ5YmEtYWY0ZC1lNWQ3NGVjNDVjZjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU05MHVHMHUxamlKOWVBM3BxRmM1THV6eTY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxaMEh4eXFyT2pyVGtmUEZKdXJTWmJ6QWRLZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJORDZTNjlBWSIsIm1lIjp7ImlkIjoiMjc2NzMyOTkyMjg6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZxMkxBRkVJRHpncklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVnBSVi9saVZOaTB0TCs2OEg2Nk54ZmZIeTFRTW1mWEZueTZVcXgxRmdWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOFpER3ZvWG9GWmpQQzExdlZoVnY5L3R4L2FpZ0s1Vk00Q1dxaUtSVm1zQTdRQ1kraXYvRU9CTmI5d1JwbXJMU0ZuZVJOSVlQU2NDRlI3dzRMR2RXQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFmWnBhSVpGL3dxRFNQZjJucDBtUWh1V0FxWjBwaTRDMGcreGNlWGRUNTFlSmQxeFZadnRuOEhKbkZ6VG9GUlhuWitqQkpJRUU1bWhDVzN6dWxzd0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NzMyOTkyMjg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWYVVWZjVZbFRZdExTL3V2Qit1amNYM3g4dFVESm4xeFo4dWxLc2RSWUZVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NTE3ODM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1GQiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "P A I N",
  author: process.env.PACK_AUTHER || "P A I N",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "P A I N",
  ownername: process.env.OWNER_NAME || "...",
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
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
