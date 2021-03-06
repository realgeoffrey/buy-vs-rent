# buy-vs-rent
买房还是租房，计算哪个更值得。

1. npm：<https://www.npmjs.com/package/buy-vs-rent>
2. demo：<https://realgeoffrey.github.io/buy-vs-rent/demo/index.html>

### 安装
1. Node.js安装

    ```bash
    npm install buy-vs-rent
    ```
2. 浏览器引用

    ```html
    <script src="//unpkg.com/buy-vs-rent"></script>
    ```

### 使用
1. Node.js

    ```javascript
    const buyvsrent = require('buy-vs-rent');

    const obj = buyvsrent({
        loan: 300,           // 贷款量（万）
        loanRate: 0.049,     // 贷款年利率
        months: 12 * 30,     // 还贷时间（月）
        cash: 100,           // 现金量（万）
        cashRate: 0.04,      // 现金年投资回报率
        rent: 0.4,           // 租房租金（万）
        rentRate: 0.1,       // 租房租金年涨幅率
        inflationRate: 0.05  // 年通货膨胀率
    })
    // obj:{housePrice: 房子购买价格, cash: 租房最终现金量, inflation: 通货膨胀倍数, power: 购买力, msg: 文本}
    ```
2. 浏览器引用

    ```html
    <script src="//unpkg.com/buy-vs-rent"></script>
    <script>
        var obj = window.buyvsrent({
            loan: 300,           // 贷款量（万）
            loanRate: 0.049,     // 贷款年利率
            months: 12 * 30,     // 还贷时间（月）
            cash: 100,           // 现金量（万）
            cashRate: 0.04,      // 现金年投资回报率
            rent: 0.4,           // 租房租金（万）
            rentRate: 0.1,       // 租房租金年涨幅率
            inflationRate: 0.05  // 年通货膨胀率
        })
        // obj:{housePrice: 房子购买价格, cash: 租房最终现金量, inflation: 通货膨胀倍数, power: 购买力, msg: 文本}
    </script>
    ```

### 说明
- 定量判断两种投资方式（买房vs租房）对自身积累财富的影响

    1. 固定资产（买房）
    2. 流动性资产（租房）
- 关注点：

    1. 贷款方式

        1. 商业贷款
        2. 公积金贷款
        3. :thumbsup:组合贷款

        >因为组合方式的贷款数额和时间固定，所以可以换算成某个单一固定利率。
    2. 还款方式

        1. :thumbsup:等额本息

            `月还款额 = 本金 * 月利率 * Math.pow(1 + 月利率, 还款总月数) / (Math.pow(1 + 月利率, 还款总月数) - 1)`
        2. 等额本金

            `月还款额 = 本金 / 还款总月数 + 剩余本金 * 月利率`
        >因为机会成本和通货膨胀率等原因，所以选择等额本息为佳。
    3. 房租涨幅
    4. 机会成本

        买房的钱、还贷的钱、交房租的钱，都有机会成本，也要计算收益。

        >买房（交房、装修后）可以出租或自住，总之就是比没有买房多一次房租收入（或少一次房租支出）。
    5. 复利

        所有投资收益或贷款利息都计算复利。
    6. ~~通货膨胀率~~

        因为对比的是两种投资方式之间的财富总量，而不是与不同时期购买力比较，所以计算时不需要加入通货膨胀。

        >但一定要加入每年0~10%的通货膨胀率进行思考，所以现金在当下购买力为曾今的：现金 * (1 + 通货膨胀率)。
- 计算方式

    1. 把所有首付、还贷的钱当做租房的可用资金，把租房支出当做租房的支出。
    2. 计算整个还贷周期之后：租房获得的现金；买房仅当做获得一套房、0现金。
    3. 假设买房的一瞬间即获得房子的居住功能，还贷和交房租均在每个月开头进行，月末即可获得现金回报收益。

### 结论

1. **有能力的就必须选择购买固定资产**
2. 其实没有考虑通货膨胀的话，把钱投入固定资产而无法流通是不适合的；但是考虑到通货膨胀，则越少现金亏损越少，负现金（贷款）会因为通货膨胀而获益。通过省去几千字几万字的论证，从其他文章得出结论的就是：

    买房，并且**最佳的房贷还款方式是：首套房付最少的首付，用最大的杠杆贷最多的款，选择30年等额本息法，拒不提前还款，积攒资金等着改善房或者二套房的投资机会；公积金贷款，初始贷款以最大贷款额为原则，其次的还款里以不让公积金账户有一分钱存留为原则，尽量提前还款。**
