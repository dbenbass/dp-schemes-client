'use strict'
// const showSchemesTemplate = require('../templates/schemes.handlebars')
const store = require('../store.js')
const api = require('./api.js')
// import api.js

const createSchemeSuccess = data => {
  store.schemes = data.schemes
  $('#message').text('Successfuly created scheme')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createScheme ran. Data is :', data)
  $('#name').val('')
  $('#date').val('')
  $('#scheme').val('')
  $('#category').val('')
  $('#feasibility').val('')
  $('#highlight').val('')
  // create a scheme and then run showAllSchemes
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}

const createSchemeFailure = data => {
  $('#message').text('Failure on scheme create')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
}

const showAllSchemesSuccess = data => {
  store.schemes = data.schemes
  // console.log(store.schemes)
  $('#message').text('Successfuly indexed schemes')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#data').html('')
  // add new schemes to top instead of bottom
  let allSchemes = data.schemes
  const allSchemesLoop = function (allSchemes) {
    let schemesArray = []
    for (let i = 0; i <= allSchemes.length; i++) {
      let schemePop = allSchemes.pop()
      schemesArray.push(schemePop)
    }
    return schemesArray
  }

  allSchemesLoop(allSchemes).forEach(scheme => {
    const schemeHTML = (`
      <h1>${scheme.idea}</h1>
      <p>Feasibility: ${scheme.feasibility}</p>
      <p>By: ${scheme.name}</p>
      <p>Category: ${scheme.category}</p>
      <p>ID: ${scheme.id}</p>
      <p>Date Submitted: ${scheme.date}</p>
      <br>
      `)
    $('#data').append(schemeHTML)
  })
  // use jquery here to display data
  //  console.log('createScheme ran. Data is :', data)
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
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
}

const deleteSchemeFailure = data => {
  $('#message').text('Failure on scheme delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('did not run. Data is :', data)
}

const onUpdateSchemeSuccess = id => {
  store.schemes = id.schemes
  $('#scheme-id-update').val('')
  $('#name-update').val('')
  $('#date-update').val('')
  $('#scheme-update').val('')
  $('#category-update').val('')
  $('#feasibility-update').val('')
  $('#highlight-update').val('')
  $('#message').text('Successfuly updated scheme')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('updateScheme ran. Data is :', id)
  // create a scheme and then run showAllSchemes
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}

const oneSchemeSuccess = function (response) {
  store.schemes = response.schemes
  $('#data').html('')
  $('#message').text('Successfuly showed scheme. Data is :', response)
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('showScheme ran. Data is :', response)
  const oneSchemeHTML = (`
    <h1>${response.scheme.idea}</h1>
    <p>Feasibility: ${response.scheme.feasibility}</p>
    <p>By: ${response.scheme.name}</p>
    <p>Category: ${response.scheme.category}</p>
    <p>ID: ${response.scheme.id}</p>
    <p>Date Submitted: ${response.scheme.date}</p>
    <br>
    `)
  $('#data').append(oneSchemeHTML)

  // create a scheme and then run showAllSchemes
}

const onUpdateSchemeFailure = function (response) {
  $('#message').html('Failur. Data is :', response)
  // reset form
  $('#schemes-update').trigger('reset')
  console.log(response)
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}
module.exports = {
  createSchemeSuccess,
  createSchemeFailure,
  showAllSchemesSuccess,
  showAllSchemesFailure,
  deleteSchemeSuccess,
  deleteSchemeFailure,
  oneSchemeSuccess,
  onUpdateSchemeSuccess,
  onUpdateSchemeFailure
  // showSchemesTemplate

}
