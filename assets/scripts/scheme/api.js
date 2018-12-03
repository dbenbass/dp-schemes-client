'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createScheme = data => {
  return $.ajax({
    url: config.apiUrl + '/schemes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateScheme = function (schemeObject) {
  return $.ajax({
    url: config.apiUrl + `/schemes/${schemeObject.scheme.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: schemeObject
  })
}

const deleteScheme = id => {
  return $.ajax({
    url: config.apiUrl + '/schemes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const showAllSchemes = () => {
  return $.ajax({
    url: config.apiUrl + '/schemes',
    method: 'GET'
  })
}

const showOneScheme = data => {
  const id = data.scheme.id
  return $.ajax({
    url: config.apiUrl + `/schemes/ + id`,
    method: 'GET',
    data: {}
  })
}

module.exports = {
//  createGame,

  createScheme,
  deleteScheme,
  showAllSchemes,
  showOneScheme,
  updateScheme

}
