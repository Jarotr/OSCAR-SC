gc1 = 'https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e '
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whats', 'https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e'] // ganti jadi group lu
global.owner = ['6285850539404','6285850539404'] // Put your number here //owner eval
global.kontak = ['6285850539404','6285850539404'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285850539404','6285850539404'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',  
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'cristian9407',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'cristian9407'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `Done`
namakontak1 = 'Owner JAROT'
namakontak2 = 'Nomor Bot'

//kasihcaption = `Done`

// Sticker WM
global.packname = '©JAROT' // ganti aja
global.author = '©JAROT' // ganti aja

//yyy
bc = '' //BOTJR BROADCAST
footer = '\n© BOTJR'
namabot = 'BotJr'
namalu = 'Jarot'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 70 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
