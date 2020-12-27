const tools = {
  /**
   * 等额本息，每月还款数额
   * @param {Number} loan - 贷款量
   * @param {Number} loanRate - 贷款月利率
   * @param {Number} months - 还贷时间
   * @returns {Number} 每月还款数额
   */
  funcA({ loan, loanRate, months }) {
    // 月还款额 = 本金 * 月利率 * Math.pow(1 + 月利率, 还款总月数) / (Math.pow(1 + 月利率, 还款总月数) - 1)
    return (
      (loan * loanRate * Math.pow(1 + loanRate, months)) /
      (Math.pow(1 + loanRate, months) - 1)
    );
  },

  /**
   * 等额本金，每月还款数额的数组
   * @param {Number} loan - 贷款量
   * @param {Number} loanRate - 贷款月利率
   * @param {Number} months - 还贷时间
   * @returns {Array} 每月还款数额的数组
   */
  funcB({ loan, loanRate, months }) {
    const returnArr = [];
    const capital = loan / months; // 每月还的本金

    for (let month = 0; month < months; month += 1) {
      // 月还款额 = 本金 / 还款总月数 + 剩余本金 * 月利率
      returnArr.push(capital + (loan - capital * month) * loanRate);
    }

    return returnArr;
  }
};

/**
 * 方法描述（月）
 * @param {Number} [loan = 300] - 贷款量（万）
 * @param {Number} [loanRate = 0.049] - 贷款年利率
 * @param {Number} [months = 12 * 30,] - 还贷时间（月）
 * @param {Number} [cash = 100] - 现金量（万）
 * @param {Number} [cashRate = 0.04] - 现金年投资回报率
 * @param {Number} [rent = 0.4] - 租房租金（万）
 * @param {Number} [rentRate = 0.1] - 租房租金年涨幅率
 * @param {Number} [inflationRate = 0.05] - 年通货膨胀率
 */
module.exports = ({
  loan = 300,
  loanRate = 0.049,
  months = 12 * 30,
  cash = 100,
  cashRate = 0.04,
  rent = 0.4,
  rentRate = 0.1,
  inflationRate = 0.05
} = {}) => {
  // 买房的价格
  const housePrice = cash + loan;

  // 租房的现金
  loanRate = loanRate / 12; // 贷款月利率
  cashRate = cashRate / 12; // 现金月投资回报率
  rentRate = rentRate / 12; // 租房租金月涨幅率
  const loanPay = tools.funcA({ loan, loanRate, months }); // 等额本息，每月还款数额
  for (let month = 0; month < months; month += 1) {
    // 未买房获得的现金收益
    cash = (cash + loanPay - rent * (1 + rentRate)) * (1 + cashRate);
  }
  cash = cash.toFixed(2);

  // 通货膨胀和购买力
  const inflation = Math.pow(1 + inflationRate, months / 12).toFixed(2); // 还完款之后的通货膨胀倍数
  const power = (cash / inflation).toFixed(2); // 购买力

  return {
    housePrice,
    cash,
    inflation,
    power,
    msg: `${(
      months / 12
    ).toFixed()}年后：<br>买房者获得当年总价"${housePrice}万"的一套房子；租房者获得"${cash}万"现金（购买力相当于当年的"${power}万"）；<br>当年买的房子需要涨至"${(
      cash / housePrice
    ).toFixed(
      2
    )}倍"持平租房者现金流；<br>由于通货膨胀，物价已经是原来的"${inflation}倍"。`
  };
};
