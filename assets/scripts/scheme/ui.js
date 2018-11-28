'use strict'

const store = require('../store.js')

const createSchemeSuccess = data => {
  store.scheme = data.scheme
  $('#message').text('Successfuly created scheme')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createScheme ran. Data is :', data)
}

const createSchemeFailure = data => {
  $('#message').text('Failure on scheme create')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
}

module.exports = {
  createSchemeSuccess,
  createSchemeFailure

}
