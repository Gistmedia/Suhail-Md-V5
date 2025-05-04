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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_47_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDEzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlXamhYdGlDT3czY3ZuQlcxY2FwekVXRWY0Qmpxb24zMVhoTUZ1RlJUWTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxEOWpSYmRYUjFPa3hNd1RKSlRuMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODA5ZmRlZDgtMjE0MC00MTAzLWI5MDMtYzIzM2M2YTJkZGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDcyLFxuICAgICAgMTExLFxuICAgICAgMjQwLFxuICAgICAgMTY2LFxuICAgICAgNjQsXG4gICAgICAxNDUsXG4gICAgICAyMDQsXG4gICAgICA5MixcbiAgICAgIDIwMyxcbiAgICAgIDE0MyxcbiAgICAgIDE3NixcbiAgICAgIDY4LFxuICAgICAgMTYzLFxuICAgICAgMTc0LFxuICAgICAgMTQ3LFxuICAgICAgMTc3LFxuICAgICAgMTczLFxuICAgICAgMTcxLFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDIxMixcbiAgICAgIDIyNixcbiAgICAgIDEwOSxcbiAgICAgIDIzMyxcbiAgICAgIDQ0LFxuICAgICAgODEsXG4gICAgICA5NCxcbiAgICAgIDg3LFxuICAgICAgMjU0LFxuICAgICAgMTk0LFxuICAgICAgMjUxLFxuICAgICAgMTUxLFxuICAgICAgODgsXG4gICAgICAxNDMsXG4gICAgICA3OSxcbiAgICAgIDE3MCxcbiAgICAgIDEyMixcbiAgICAgIDE5NixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNzE4S1hETVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2Nzg5MzEzODo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdpc3RtZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiMTk0Nzc2NzgzNjU1MDI4OjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05icXhid0VFTjMrMjhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUlxcWdyQzlvL1BiS1p4dDBWeTVOMndOMmNiQjJRR3NaS0hlVXpWclhpVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0d2ZhUjZmcHI3NkVERldCZ1owZGtIR0dlRjJaQjZnQVJVTHVvU0srTDNHTW9tSVQ1SVVMR1pEZmg0ejI1ZittOG9MQk5NbUZPV0VFQ2RyMDJ3WEdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJieVllcmo3MGxGOU8rb2hrQnVTTXBzbzFRWnF5SUhpZjMyRGZvY3JKdWZQUjBna3lqdGxPOC83enpVa1lsKzROYy9naloxY1dUOUFXUVZaSHVLQXBoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY3ODkzMTM4OjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYzMzc2MzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9===="  // PUT your SESSION_ID 


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
