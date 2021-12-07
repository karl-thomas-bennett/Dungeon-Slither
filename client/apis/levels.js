import request from 'superagent'

const rootURL = '/api/v1/levels'

export const getLevelsAllAPI = () => {
  return request.get(rootURL)
    .then(res => {
      return res.body
    })
}

export const getLevelByIdAPI = (id) => {
  return request.get(`${rootURL}/${id}`)
    .then(res => {
      return res.body
    })
}

export const addLevelAPI = (level) => {
  return request.post(rootURL)
    .send(level)
    .then(res => {
      return res.body
    })
}

export const deleteLevelAPI = (id) => {
  return request.delete(`${rootURL}/${id}`)
    .then(res => {
      return res.body
    })
}
