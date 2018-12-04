'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const schemeEvents = require('./scheme/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#scheme-create').on('submit', schemeEvents.onCreateScheme)
  $('#scheme-index').on('submit', schemeEvents.onShowAllSchemes)
  $('#scheme-delete').on('submit', schemeEvents.onDeleteScheme)
  $('#schemes-show').on('submit', schemeEvents.onShowOneScheme)
  $('#schemes-update').on('submit', schemeEvents.onUpdateScheme)

  schemeEvents.onShowAllSchemes()
})
