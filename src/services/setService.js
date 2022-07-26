import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/sets`

async function create(setData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(setData)
  })
  return await res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

async function createCard(setId, cardData) {
  const res = await fetch(`${BASE_URL}/${setId}/cards`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(cardData)
  })
  return await res.json()
}

async function getSetDetails(setId) {
  const res = await fetch(`${BASE_URL}/${setId}`,
  {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  create,
  createCard,
  getAll,
  getSetDetails,
  deleteOne,
}