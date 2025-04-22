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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNeENjMkVRc0JuMEQ3bTdURlRtK2o1WURIQ0Q2VmU3aGFTTDJOK3g0Q3djPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0TnducFM2V1RVNnFqRnI0cXBuX2V3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI2NjNjMDZiLWIwY2YtNDYzNS05NTI1LWNiNTZiYjgwZDJlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMDIsXG4gICAgICAxNjcsXG4gICAgICAxMTksXG4gICAgICAxOTMsXG4gICAgICAxNjYsXG4gICAgICAxMzEsXG4gICAgICA1MixcbiAgICAgIDEwOSxcbiAgICAgIDEzOCxcbiAgICAgIDIyNixcbiAgICAgIDM4LFxuICAgICAgMTY2LFxuICAgICAgNyxcbiAgICAgIDE4MyxcbiAgICAgIDE4NixcbiAgICAgIDgzLFxuICAgICAgMTUwLFxuICAgICAgMjU0LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxNyxcbiAgICAgIDEwNyxcbiAgICAgIDE5NCxcbiAgICAgIDE3NSxcbiAgICAgIDIyMyxcbiAgICAgIDU4LFxuICAgICAgNTgsXG4gICAgICAxNTcsXG4gICAgICA3MixcbiAgICAgIDEyMCxcbiAgICAgIDExOCxcbiAgICAgIDI0LFxuICAgICAgNjAsXG4gICAgICAxNDAsXG4gICAgICAyMzQsXG4gICAgICAxODcsXG4gICAgICAxMjYsXG4gICAgICAxNjQsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDVGQ0JSR1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjc4OTMxMzg6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHaXN0bWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjE5NDc3Njc4MzY1NTAyODo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWHF4YndFRUk3N25zQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFJcXFnckM5by9QYktaeHQwVnk1TjJ3TjJjYkIyUUdzWktIZVV6VnJYaVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielZLSmp4elZVQWVMTU15S3poNjB0THVyemo0RFhVa1ppQ1N4WUY3cVJKd2NZc2ZSbnIzUUwxVDNncy9CL1lVYmY1dFU1RmZraVNzcktoTEYvSFRaQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQkp1N3RDUnNuTVpvM2hOYmZnZ00xMmxhL0Z3T2Z0T0x1UTc2Tmk2Vmh0OUtRUGhrUjMwSHd0RkZWVGxGZ0hpVzNYbjNCOXBJaytzT3c5UjdPOGszRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Nzg5MzEzODo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MzM3NzQ2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ===="  // PUT your SESSION_ID 


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
