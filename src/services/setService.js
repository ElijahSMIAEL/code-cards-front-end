import * as tokenService from '../services/tokenService'

const BASE_URl = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/sets`

async function create(setData) {
  const res = await fetch(BASE_URl, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(setData)
  })
  return await res.json()
}


export {
  create,
}