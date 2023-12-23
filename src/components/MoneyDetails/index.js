import './index.css'
// Write your code here
const BALANCE_IMG =
  'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
const INCOME_IMG =
  'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'
const EXPENSES_IMG =
  'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balance-details-card">
        <img src={BALANCE_IMG} alt="balance" className="money-type-img" />
        <div>
          <p className="money-type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-details-card">
        <img src={INCOME_IMG} alt="income" className="money-type-img" />
        <div>
          <p className="money-type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-details-card">
        <img src={EXPENSES_IMG} alt="expenses" className="money-type-img" />
        <div>
          <p className="money-type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
