/**
 * 获取某search值
 * @param {String} checkKey - search的key
 * @param {String} [search = window.location.search] - search总字符串
 * @returns {String|Boolean} - search的value 或 不存在false
 */
const getSearchValue = (checkKey, search) => {
  checkKey = checkKey.toString()
  search = search || window.location.search

  if (search.slice(0, 1) === '?') {
    search = search.slice(1)
  }

  const searchArr = search.split('&')
  let tempArr, key, value

  for (let i = 0, len = searchArr.length; i < len; i++) {
    if (searchArr[i] !== '') {
      tempArr = searchArr[i].split('=')
      key = tempArr.shift()
      value = tempArr.join('=')

      if (key === checkKey) {
        return value
      }
    }
  }

  return false
}

// 获取填入内容并打印
const loan = document.getElementById('loan')
const loanRate = document.getElementById('loanRate')
const months = document.getElementById('months')
const cash = document.getElementById('cash')
const cashRate = document.getElementById('cashRate')
const rent = document.getElementById('rent')
const rentRate = document.getElementById('rentRate')
const inflationRate = document.getElementById('inflationRate')

loan.value = getSearchValue('loan') || '300'
loanRate.value = getSearchValue('loanRate') || '0.049'
months.value = getSearchValue('months') || '360'
cash.value = getSearchValue('cash') || '100'
cashRate.value = getSearchValue('cashRate') || '0.04'
rent.value = getSearchValue('rent') || '0.4'
rentRate.value = getSearchValue('rentRate') || '0.1'
inflationRate.value = getSearchValue('inflationRate') || '0.05'

const buyvsrent = require('../buy-vs-rent.js')
const text = buyvsrent({
  loan: parseFloat(loan.value, 10),
  loanRate: parseFloat(loanRate.value, 10),
  months: parseFloat(months.value, 10),
  cash: parseFloat(cash.value, 10),
  cashRate: parseFloat(cashRate.value, 10),
  rent: parseFloat(rent.value, 10),
  rentRate: parseFloat(rentRate.value, 10),
  inflationRate: parseFloat(inflationRate.value, 10)
}).msg
document.getElementById('p').innerHTML = text
console.log(text)
