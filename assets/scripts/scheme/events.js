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

const onShowAllSchemes = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('get schemes')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.showAllSchemes()
    .then(ui.showAllSchemesSuccess) // if your request was succesful
    .catch(ui.showAllSchemesFailure) // if your request failed
}

const onUpdateScheme = function (event) {
  console.log('update')
  event.preventDefault()
  const input = getFormFields(event.target) // input = { book: { id: 100 } }
  console.log('my book id is ', input.scheme.id)
  console.log('my book id title ', input.scheme.idea)
  console.log('my book id author ', input.scheme.name)
  const schemeObject = input
  // passing in 3 arguments: id, title, author
  api.updateScheme(schemeObject)
    .then(function (response) {
      // response should contain update book object
      ui.onUpdateSchemeSuccess(response)
    })
  // .then(ui.handleDeleteSuccessResponse)
    .catch(ui.handleFailureResponse)
}

const onShowOneScheme = function (event) {
  console.log('one scheme')
  event.preventDefault()
  const data = $('#scheme-show').val()
//  console.log('my book id is ', input.scheme.ID)
//  console.log('my book id title ', input.scheme.idea)
//  console.log('my book id author ', input.scheme.name)
  // passing in 3 arguments: id, title, author
  console.log(data)
  api.oneScheme(data)
    .then(function (response) {
      // response should contain update book object
      ui.oneSchemeSuccess(response)
    })
  // .then(ui.handleDeleteSuccessResponse)
    .catch(ui.handleFailureResponse)
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
  onDeleteScheme,
  onShowOneScheme,
  onUpdateScheme

}
