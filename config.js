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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktzZ043dHJjem9pd2s4Vk51ZUorNGNNazBQMXBDNDRieGpBUUZDb1pFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWllvbGpIZjZPSUZnS0dLZnpkbloxS0lvMXR6dXh1QTV2cjZHNjF4Zm5FST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QklMczhmaFpoQzJzVUpVakNVSkRFZHVldDFadWlGUGhrZnhYai9STzBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcjRaaFlucVhUSyt5Zis4WEJqUjIvZmVsVURNOEF5WHMweTJhTlhSZ0JnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOalBobXE4eTY2cGJINGMyYVR0L0dPSlJHUmJLUFZwK25Ob2dPOEFZMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBkT0hQY21Pc2RqWHVxV2FMVWJBRkY5bjFSamlreXdnMG5BT2duRXZGMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU44TUJadlNIN0pHTW9RT004ZjdjbERmck0wbUZDNGtlSnNobCtlS0wzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVi94TFNmUXNPT2kyR21FNG1obVpPYURnTXB4TWVaRE9reUgreEtyaVhqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpWb0ZvcjNjalVYc2IzVWk0ZjdrQnd1THdpVVUwYlB0MXZ3a0o0Ty9KQUZpQndPNEV5SjZ4bGRPRUU2SVF0d2ljbkZDd0c5S2JnY2JsVWRsL2MrYWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJyaE1lRWt1dWlvR3pVODladmd2dmtLeVNqQTlzS25NQWVETE1oV0FHNTQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3Njk0NTY1NzM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE4QzdFQTBERjZFODc3MEE3QzE1NzNBNUVBQkMxNzhCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTQ1NzM2MDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3Njk0NTY1NzM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYxMUM0NjM5QTUzRjdBOEZDRUQ3NTU4NjA1OTQ3RDFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTQ1NzM2MDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlYtdS1aV0UyUUVHRDN5bFlablYzaGciLCJwaG9uZUlkIjoiMjY3ODEwYjMtNTU5Ny00NjdiLWJiM2YtMjIzZmJkMjE4MjRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBjVnNTeERjaDFOZ21tZE04bmU2ZEU2MXdpTT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRC9vZ0dFYjNYQ0hVMXh4SHZHb1JqZVF1aTc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTER6bUxNREVKT2l5YkVHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUmlyMGJndWdISTFSTE15aTluNkZlZ291UFEvYmZhS1Q2eHFxWjJ0Q1NVRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidlNJaG42eHRWZ3hneENqb1l6U013NVZwcGdkd0dBckVNRExLcmtVUFRBTGVqRU1OQ1dUaFFvTkxBZ0IxbU9laE9uVzRFUmV6VjhWQXR2MnFaWjhrQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InlPc1VRU2xJNmI0V2lRdTZFdzVVM3U4elhPOEpaUXpGVWkvOFVUelRlS0ZJbk5qa0JGN1NmaTNBVlZwL295cXZub2dNMCtZZGt4cVB6aDZTcHdpVGpRPT0ifSwibWUiOnsiaWQiOiIyNzY5NDU2NTczNjoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJdHMubWUifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2OTQ1NjU3MzY6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVlxOUc0TG9CeU5VU3pNb3ZaK2hYb0tMajBQMjMyaWsrc2FxbWRyUWtsQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDU3MzYwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBY2YifQ=="
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
