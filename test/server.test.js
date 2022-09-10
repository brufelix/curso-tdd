import supertest from 'supertest'

const request = supertest('http://localhost:9000')

test('should respond on port 3001', () => {
  return request.get('/')
    .then(res => expect(res.status).toBe(200))
})