import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


global.owner = [
['6283146993017', true],
['6283146993017', 'Ikhsan', true],
['6283146993017', 'Ikhsan', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6283122390511'
global.nomorown = '6283146993017'
global.nomorown1 = '6283146993017'
global.nomorown2 = '6283146993017'
global.nomorwa = '6283146993017'


global.readMore = readMore
global.author = 'Ikhsan'
global.namebot = '​ShanBot'
global.wm = '© ShanBot'
global.media = 'https://telegra.ph/file/02a8d3c4b00146bbfeb5d.jpg'
global.watermark = wm
global.wm2 = 'ShanBot'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `ShanBot`
global.stickpack = 'Sticker by'
global.stickauth = `© ShanBot`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1= 'Ikhsan'
global.nameown2 = 'Ikhsan'
global.Linkgc = 'Bentar'
global.lynk = '-'
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/fallxd_781' //instagram
global.sgh = 'https://github.com/FallEzz' //github
global.sgc = 'https://chat.whatsapp.com/KCYr0YwODJTEEFUlPxuNXQ' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/@FallXD425' //youtube
//Donasi/Payment
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.pdana = '0858-1370-8397' // dana
global.povo = 'ga punya'
global.pgopay = '0858-1370-8397' // gopay
global.plinkaja = '-' //link aja
global.ppulsa = '0858-1370-8397' // pulsa
global.ppulsa2 = '-' //pulsa 2
global.ListHargaSewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']
// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

// untuk apikey biarin aja pake ini aja kalau fitur error beli apikeynya
global.uptime = '' // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu'  //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K' // https://deepai.org
global.zenzkey = 'zenzkey_1ec92f71d3bb'
global.lolkey = 'SGWN'
global.caliph = 'Lwlct6wi'
global.rose = 'Rs-Danil_Elistz'
global.zeltoria = 'Elistz'
global.ibeng = 'APIKEY'
global.xcode = 'Frieren'
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  violetics : 'https://violetics.pw',
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site',
  zeltoria: 'https://api.zeltoria.my.id'
}

global.APIKeys = { 
  'https://api.lolhuman.xyz': 'Maslent',
  'https://violetics.pw': 'beta',
  'https://api.itsrose.site': 'Rs-Danil_Elistz',
  'https://api-xcoders.site': 'Frieren',
  'https://api.zeltoria.my.id': 'Elistz'
}

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.optsnsfw = true 
global.premnsfw = true 
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini
global.lia = 'https://telegra.ph/file/243c0ea03afddfdaeda17.jpg'
global.thumb = 'https://telegra.ph/file/e970313c67817ea37de98.jpg' 
global.imagebot = 'https://telegra.ph/file/e970313c67817ea37de98.jpg'
global.giflogo = 'https://telegra.ph/file/c02bad57b6ce1d594a11c.mp4'
global.thumbs = ['https://telegra.ph/file/e970313c67817ea37de98.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/e970313c67817ea37de98.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/8387d700e76f7bad8b137.jpg'
global.fotonya2 = 'https://telegra.ph/file/a75eea9bff3ab208cdfdd.jpg' 
global.fsizedoc = '999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/e970313c67817ea37de98.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
