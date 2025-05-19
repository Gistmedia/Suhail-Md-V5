const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogbangoodluck07@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋_𝕄`" 


global.devs = "2348167893138" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167893138";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_55_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQxLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1aZlRZckdtZXhpekVhT1V5ZVFBdVZ6NUdXRFpTR1NBM3pXQ0hKWXhPS0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpzTGlyYnYwUnp5amxwRUxpTkt6cFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTRkNjdjNTgtMjFmMS00Njg4LTg0NTEtZTBhODcwNjA4NTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE3NyxcbiAgICAgIDI4LFxuICAgICAgNzEsXG4gICAgICA3NyxcbiAgICAgIDY4LFxuICAgICAgNjIsXG4gICAgICA0NSxcbiAgICAgIDQwLFxuICAgICAgNDMsXG4gICAgICA0MCxcbiAgICAgIDEyOSxcbiAgICAgIDExMCxcbiAgICAgIDIwMSxcbiAgICAgIDMzLFxuICAgICAgOTEsXG4gICAgICAxNTIsXG4gICAgICAxOTQsXG4gICAgICA5MixcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMjE5LFxuICAgICAgMjE1LFxuICAgICAgMjEzLFxuICAgICAgMjIxLFxuICAgICAgMjUyLFxuICAgICAgMTgwLFxuICAgICAgMTA0LFxuICAgICAgMTg4LFxuICAgICAgMTAyLFxuICAgICAgOTEsXG4gICAgICAyMTAsXG4gICAgICAyNDYsXG4gICAgICA2NSxcbiAgICAgIDU2LFxuICAgICAgMTU3LFxuICAgICAgMTg2LFxuICAgICAgMTYyLFxuICAgICAgMTQyLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnpxeGJ3RUVPeXJxOEVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhSXFxZ3JDOW8vUGJLWnh0MFZ5NU4yd04yY2JCMlFHc1pLSGVVelZyWGlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhFdWRySUJ0OFhTeFVkVjdoWjVlSWhKeXdZVkhJZXFackgvUUJ4N3Nha2dKOEl5VkwvR21uR2lwV2F1VThNV0pxcFBmbG5sWjc0NEZqMCsxUnhYRUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhHSWhCMDN6cHUzNlZCZFlRQi8zTk1FY0p2T250dTVtU3ExL2NsSXpuUW9sbm5XZ1ZvUmw3S1QzcnRRd2FGNTNMT2NCc2R6YmtJVldzNE9VNGtNK0FnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2Nzg5MzEzODo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdpc3RtZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiMTk0Nzc2NzgzNjU1MDI4OjgwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Nzg5MzEzODo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3NjM3NzQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWtWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJa1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJSHcvT2RWaDZ0QmJoeXpMbjhTVStYNVJNMzBBNnZOM2h5YVdvWUQ1cXcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDA3MTUwOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlrVy5qc29uIjogIntcImtleURhdGFcIjpcIjVTUjl4bnJCZDJoTWp3RDQ2aFdxWlA4WldrWHlNNllNNFJ4a0hLeDlMcWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMDcxNTA5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzQ4NDQyODU5MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlrWC5qc29uIjogIntcImtleURhdGFcIjpcInZyVjBFUGNiRGhGYkI0Zi9iTVlWeDlhNVJOczEybUZqYzB0Q0t3eEVkaUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwMDcxNTA5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWtZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajh1NFROaERyVzg0aHA0c2R3QmJqczFReXUxb1plekVHaFF3L0NsQXlZaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAwNzE1MDk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ3NTkzNDAzNTUxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWtaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnI1K0VBM25aKy9ZS1JDQTR2ODBEa1FIc3IwQTVhWUk3MUdjc3J2czQrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAwNzE1MDk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJa2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuNjI3ZCt0OVhTYTNBeTlvcStReDRvZUdwL1F5ckpzaUZRVzlJVVhZWGJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDA3MTUwOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc2MzYzMTgxMjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJa2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBa0dKU2tsZDdoeEY3WGJQR3d4cVpEN21jc3pVTEo2YXhiQzdBdnNMcmFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDA3MTUxMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzYzNzY5MjQxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔾𝕀𝕊𝕋_𝕄",
  packname: process.env.PACK_NAME || "𝔾𝕀𝕊𝕋_𝕄",
  botname : process.env.BOT_NAME  || "`𝔾𝕀𝕊𝕋_𝕄`",
  ownername:process.env.OWNER_NAME|| "`𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸"  ).toUpperCase(),



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
