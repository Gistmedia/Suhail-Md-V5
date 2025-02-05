const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038336733";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_00_02_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBdUgvNEtrSHZMdUhCT2MybnVrMjkwbXRqc01XaEpHaTZtdWxoU0xOVlRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjc4OTMxMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjExN0IwNEE3OTI1QzMwRUYwREVCRUMzNzIzN0QwRjNGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczODczODc5NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnTGtsbXhzV1FzbUZhRkhSeXoyOFpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkYmM5ZTI5LThmYzItNGMxNS04NzI4LTdhY2VkZDhmY2E1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA5MyxcbiAgICAgIDI0MixcbiAgICAgIDEwNSxcbiAgICAgIDI3LFxuICAgICAgMTI3LFxuICAgICAgMTksXG4gICAgICA4MCxcbiAgICAgIDE0MyxcbiAgICAgIDExMSxcbiAgICAgIDg5LFxuICAgICAgMjQxLFxuICAgICAgMjQxLFxuICAgICAgMTQzLFxuICAgICAgNzAsXG4gICAgICAxMCxcbiAgICAgIDcwLFxuICAgICAgMTEsXG4gICAgICA1NSxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNDEsXG4gICAgICAzNSxcbiAgICAgIDM4LFxuICAgICAgMTExLFxuICAgICAgMTYxLFxuICAgICAgOTUsXG4gICAgICAxMTUsXG4gICAgICA3LFxuICAgICAgNTksXG4gICAgICAxOTgsXG4gICAgICAxMTMsXG4gICAgICAyMTIsXG4gICAgICAyMjAsXG4gICAgICAxMzMsXG4gICAgICAyMjYsXG4gICAgICAxOTksXG4gICAgICA2OSxcbiAgICAgIDIyNixcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk4MkVEUFk4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY3ODkzMTM4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ3NzY3ODM2NTUwMjg6NjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGExcW9FSEVPU1lqTDBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpS1pMZlVHOEM3NVd5aUc2QmNjZ2MydThpSGZqNGNnOExjOWNTSWJJWjIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVRVkg1QUgxK2YzcmhWVXROcngxKzVLYlFCVmRKWjlRUEtVQW5PNWE4ZFc3UFRzUFJOajZzbDgrb2RiYXRFeFNIeUZqckk0empYN2FxNXcxR1VnOUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIld6SjVtT3lodXduSVhFNVRiR1FTVmZnSDhoOTdvTGlWVEVpNUpzZjMyL0phbE8rSS9CRlpmaDlkZ0NVSlpBUDk0dG9pSUJKZjRBbzRFYU1oUzRXa2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjc4OTMxMzg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzg3Mzg3OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMyKy5qc29uIjogIntcImtleURhdGFcIjpcIkcvZnlnNjB5dmxENzhSYStpRk8yVW1WcmUveit3US93dytVVHlTM0ZGR1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4MTg0MDMxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM4NzM4Nzk2MjY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "`𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`",
  ownername:process.env.OWNER_NAME|| "`𝔻𝔸ℝ𝕋𝕆ℕ`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
