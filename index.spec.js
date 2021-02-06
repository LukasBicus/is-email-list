const {isEmailList} = require('./index')

describe('isEmailList', () => {
  test('should return true for valid email', () => {
    expect(isEmailList('email@email.com')).toBeTruthy()
  })

  test('should return false for invalid email', () => {
    expect(isEmailList('email@@@email.com')).toBeFalsy()
  })

  test('should return true for list of emails separated by comma', () => {
    expect(isEmailList('email@email.com   , email2@email.com  ')).toBeTruthy()
  })

  test('should return true for list of emails separated by semicolon', () => {
    expect(isEmailList('email@email.com   ; email2@email.com  ')).toBeTruthy()
  })

  test('should return true for list of emails separated by mix of colons and semicolons', () => {
    expect(
      isEmailList(
        '  email@email.com   ; email2@email.com  , email2@email.com  '
      )
    ).toBeTruthy()
  })

  test('should return fail for list of emails separated by mix of colons and semicolons with one wrong email', () => {
    expect(
      isEmailList(
        '  email@email.com   ; email2@@@email.com  , email2@email.com  '
      )
    ).toBeFalsy()
  })
})
