const { TelegramClient } = require('telegram')
require('dotenv').config();
const input = require('input')
const { session, apiId, apiHash } = require('./config')

;(async () => {
  console.log('Loading interactive example...')
  const client = new TelegramClient(session, apiId, apiHash, {
    connectionRetries: 3,
  })
  await client.start({
    phoneNumber: async () => await input.text('Please enter your number: '),
    password: async () => await input.text('Please enter your password: '),
    phoneCode: async () =>
      await input.text('Please enter the code you received: '),
    onError: (err) => console.log(err),
  })
  console.log('You should now be connected.')
  console.log(client.session.save())
})()