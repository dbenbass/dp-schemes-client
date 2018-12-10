'use strict'
// const showSchemesTemplate = require('../templates/schemes.handlebars')
const store = require('../store.js')
const api = require('./api.js')
// import api.js

const createSchemeSuccess = data => {
  store.schemes = data.schemes
  $('#submitmessage').text(`Successfuly created scheme ID ${data.scheme.id}`)
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('success')
  console.log('createScheme ran. Data is :', data)
  $('#name').val('')
  $('#date').val('')
  $('#scheme').val('')
  $('#category').val('')
  $('#feasibility').val('')
  $('#highlight').val('')
  $('#authmessage').hide()
  // create a scheme and then run showAllSchemes
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}

const createSchemeFailure = data => {
  $('#submitmessage').text('Failure on scheme create')
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('failure')
  $('#authmessage').hide()
  console.error('did not run. Data is :', data)
}

const showAllSchemesSuccess = data => {
  store.schemes = data.schemes
  // console.log(store.schemes)
  $('#onescheme').text('You are currently viewing all schemes')
  $('#onescheme').removeClass()
  $('#onescheme').addClass('success')
  $('#data').html('')
  // add new schemes to top instead of bottom
  const allSchemes = data.schemes
  const allSchemesLoop = function (allSchemes) {
    const schemesArray = []
    for (let i = 0; i <= allSchemes.length; i++) {
      const schemePop = allSchemes.pop()
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
  $('#onescheme').text('Failure on scheme index')
  $('#onescheme').removeClass()
  $('#onescheme').addClass('failure')
  console.error('did not run. Data is :', data)
}

const deleteSchemeSuccess = data => {
  $('#deletemessage').text('Successfuly deleted scheme')
  $('#deletemessage').removeClass()
  $('#deletemessage').addClass('success')
  $('#delete-input').val('')
  console.log('deleteScheme ran. Data is :', data)
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
}

const deleteSchemeFailure = data => {
  $('#deletemessage').text('Failure on scheme delete')
  $('#deletemessage').removeClass()
  $('#deletemessage').addClass('failure')
  $('#delete-input').val('')
  console.error('did not run. Data is :', data)
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
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
  $('#authmessage').hide()
  $('#submitmessage').text('Successfuly updated scheme')
  $('#submitmessage').removeClass()
  $('#submitmessage').addClass('success')
  console.log('updateScheme ran. Data is :', id)
  // create a scheme and then run showAllSchemes
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}
const onUpdateSchemeFailure = function (response) {
  $('#submitmessage').html('Failur. Data is :', response)
  // reset form
  $('#schemes-update').trigger('reset')
  console.log(response)
  api.showAllSchemes()
    .then(showAllSchemesSuccess)
  //    .catch()
}

const oneSchemeSuccess = function (response) {
  store.schemes = response.schemes
  $('#data').html('')
  $('#onescheme').text(`You are currently viewing scheme ${response.scheme.id}`)
  $('#onescheme').removeClass()
  $('#onescheme').addClass('success')
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
  $('#scheme-index').show()
  $('#scheme-show').val('')
  $('#message').hide()

  // create a scheme and then run showAllSchemes
}

const onOneSchemeFailure = error => {
  $('#onescheme').text('Error retrieving scheme')
  $('#onescheme').removeClass()
  $('#onescheme').addClass('failure')
  $('#password').val('')
  $('#email').val('')
  $('#scheme-show').val('')
  $('#message').hide()
  console.error('oneSchemeFailure ran. Error is :', error)
}

module.exports = {
  createSchemeSuccess,
  createSchemeFailure,
  showAllSchemesSuccess,
  showAllSchemesFailure,
  deleteSchemeSuccess,
  deleteSchemeFailure,
  oneSchemeSuccess,
  onOneSchemeFailure,
  onUpdateSchemeSuccess,
  onUpdateSchemeFailure
  // showSchemesTemplate

}
