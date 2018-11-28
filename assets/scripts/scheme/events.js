'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateScheme = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('we are here')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.createScheme(data)
    .then(ui.createSchemeSuccess) // if your request was succesful
    .catch(ui.createSchemeFailure) // if your request failed
}

const onShowAllSchemes = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('get schemes')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.showAllSchemes(data)
    .then(ui.showAllSchemesSuccess) // if your request was succesful
    .catch(ui.showAllSchemesFailure) // if your request failed
}

const onDeleteScheme = event => {
  event.preventDefault()
  const data = $('#delete-input').val()
  console.log('delete scheme')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.deleteScheme(data)
    .then(ui.deleteSchemeSuccess) // if your request was succesful
    .catch(ui.deleteSchemeFailure) // if your request failed
}
module.exports = {
  onCreateScheme,
  onShowAllSchemes,
  onDeleteScheme

}
