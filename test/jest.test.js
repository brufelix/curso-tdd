test('Devo conhecer as principais assertivas do jest', () => {
  let number = null
  expect(number).toBeNull()

  number = 12
  expect(number).not.toBeNull()

  expect(number).toBe(12)
  expect(number).toEqual(12)

  expect(number).toBeGreaterThan(9)
  expect(number).toBeLessThan(15)
})

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Jonh', email: 'jonh@email.com' }
  const obj2 = { name: 'Jonh', email: 'jonh@email.com' }
  const obj3 = obj

  expect(obj).toHaveProperty('name')
  expect(obj).toHaveProperty('email')
  expect(obj.name).toBe('Jonh')
  expect(obj).toEqual(obj2)
  expect(obj).toBe(obj3)
})