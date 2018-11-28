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

const changeScheme = data => {
  return $.ajax({
    url: config.apiUrl + '/schemes-update',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteScheme = data => {
  return $.ajax({
    url: config.apiUrl + '/schemes-update',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const showAllSchemes = data => {
  return $.ajax({
    url: config.apiUrl + '/schemes',
    method: 'GET',
    data: data
  })
}

const showOneScheme = data => {
  return $.ajax({
    url: config.apiUrl + '/schemes-show',
    method: 'GET',
    data: {}
  })
}

module.exports = {
//  createGame,

  createScheme,
  changeScheme,
  deleteScheme,
  showAllSchemes,
  showOneScheme

}
