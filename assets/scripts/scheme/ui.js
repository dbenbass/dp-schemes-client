'use strict'

const store = require('../store.js')

const createSchemeSuccess = data => {
  store.schemes = data.schemes
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

const showAllSchemesSuccess = data => {
  store.schemes = data.schemes
  console.log(store.schemes)
  $('#message').text('Successfuly indexed schemes')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createScheme ran. Data is :', data)
}

const showAllSchemesFailure = data => {
  $('#message').text('Failure on scheme index')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
}

const deleteSchemeSuccess = data => {
  $('#message').text('Successfuly deleted scheme')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('deleteScheme ran. Data is :', data)
}

const deleteSchemeFailure = data => {
  $('#message').text('Failure on scheme delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
}
module.exports = {
  createSchemeSuccess,
  createSchemeFailure,
  showAllSchemesSuccess,
  showAllSchemesFailure,
  deleteSchemeSuccess,
  deleteSchemeFailure

}
