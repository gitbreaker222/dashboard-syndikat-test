import {
  echotest,
  getTimeDifference,
} from './util'

test('echo test', () => {
  const input = 'asdf'
  const result = echotest(input)
  expect(result).toBe(input)
})

test('time difference', () => {
  expect(getTimeDifference()).toBe(NaN)

  expect(getTimeDifference('2000-01-01') < 0).toBe(true)

  expect(getTimeDifference('2222-01-01') > 0).toBe(true)

  expect(getTimeDifference('1970-01-01', 0)).toBe(0)

  const fakeNow = new Date('2020-07-14').getTime()
  const twoWeeks = new Date("1970-01-14").getTime()
  expect(getTimeDifference('2020-07-01', fakeNow)).toBe(- twoWeeks)
  expect(getTimeDifference('2020-07-27', fakeNow)).toBe(twoWeeks)
})