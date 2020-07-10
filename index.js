const Discord = require('discord.js')
const client = new Discord.Client()

const auth = require('./auth.json')

const { dispatch } = require('./commands/index')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', dispatch)
client.login(auth.token)