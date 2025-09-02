





const axios = require("axios"); const request = require("request"); const fs = require("fs-extra"); const moment = require("moment-timezone"); module.exports.config = { name: "admin", version: "1.0.0", hasPermssion: 0, credits: "ullash", description: "Show Owner Info", commandCategory: "info", usages: "", cooldowns: 5 }; module.exports.run = async function({ api, event }) { var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A"); var callback = () => api.sendMessage({ body: ` ┏━━━━━━━━━━━━━━━━━━━━━┓ ┃ 🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟 ┣━━━━━━━━━━━━━━━━━━━━━┫ ┃ 👤 𝗡𝗮𝗺𝗲 : Jisan Chowdhury ୧⍤⃝💐 ┃ 🚹 𝗚𝗲𝗻𝗱𝗲𝗿 : 𝗠𝗮𝗹𝗲 ┃ ❤️ 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲 ┃ 🎂 𝗔𝗴𝗲 : ❌┃ 🕌 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻 : 𝗜𝘀𝗹𝗮𝗺 ┃ 🏫 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : ⁉️┃ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗦𝘆𝗹𝗵𝗲𝘁, 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵 ┣━━━━━━━━━━━━━━━━━━━━━┫ ┃ 🎭 𝗧𝗶𝗸𝘁𝗼𝗸 : ┃ 📢 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : ┃ 🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :  ┣━━━━━━━━━━━━━━━━━━━━━┫ ┃ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲: ${time} ┗━━━━━━━━━━━━━━━━━━━━━┛ `, attachment: fs.createReadStream(__dirname + "/cache/1.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png")); return request(encodeURI(`https://graph.facebook.com/61578598505328/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)) .pipe(fs.createWriteStream(__dirname + '/cache/1.png')) .on('close', () => callback()); };
