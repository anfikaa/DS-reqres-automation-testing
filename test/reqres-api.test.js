const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()

const BASE_URL = 'https://reqres.in'

const API_KEY = process.env.API_KEY

describe('Reqres API Automation Testing', () => {

  it('GET - List Users', async () => {

    const response = await request(BASE_URL)
      .get('/api/users?page=2')
      .set('x-api-key', API_KEY)

    expect(response.status).to.equal(200)

  })

  it('POST - Create User', async () => {

    const response = await request(BASE_URL)
      .post('/api/users')
      .set('x-api-key', API_KEY)
      .send({
        name: 'Fika',
        job: 'QA Engineer'
      })

    expect(response.status).to.equal(201)

  })

  it('PATCH - Update User', async () => {

    const response = await request(BASE_URL)
      .patch('/api/users/2')
      .set('x-api-key', API_KEY)
      .send({
        job: 'Senior QA Engineer'
      })

    expect(response.status).to.equal(200)

  })

  it('DELETE - Delete User', async () => {

    const response = await request(BASE_URL)
      .delete('/api/users/2')
      .set('x-api-key', API_KEY)

    expect(response.status).to.equal(204)

  })

})