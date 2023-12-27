import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsHistory: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onsubmitTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    if (titleInput !== '' && amountInput !== '') {
      const typeInput = transactionTypeOptions.find(
        eachItem => eachItem.optionId === optionId,
      )
      const newTransactionObj = {
        id: uuidv4(),
        title: titleInput,
        amount: parseInt(amountInput),
        type: typeInput.displayText,
      }

      this.setState(prevState => ({
        transactionsHistory: [
          ...prevState.transactionsHistory,
          newTransactionObj,
        ],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
      }))
    }
  }

  onUpdateTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onUpdateAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onUpdateOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  getDeleteHistoryItem = id => {
    const {transactionsHistory} = this.state
    const filteredHistoryList = transactionsHistory.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({transactionsHistory: filteredHistoryList})
  }

  getTotalIncome = () => {
    const {transactionsHistory} = this.state
    let amount = 0
    transactionsHistory.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        amount += eachItem.amount
      }
    })
    return amount
  }

  getTotalExpenses = () => {
    const {transactionsHistory} = this.state
    let amount = 0
    transactionsHistory.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        amount += eachItem.amount
      }
    })
    return amount
  }

  getTotalBalance = (totalIncome, totalExpenses) => {
    const balanceAmount = totalIncome - totalExpenses

    return balanceAmount
  }

  render() {
    const {transactionsHistory, titleInput, amountInput, optionId} = this.state
    const totalIncome = this.getTotalIncome()
    const totalExpenses = this.getTotalExpenses()
    const totalAmount = this.getTotalBalance(totalIncome, totalExpenses)
    console.log(optionId)
    return (
      <div className="main">
        <div className="main-content-container">
          <div className="account-name-container">
            <h1 className="account-name">Hi, Richard</h1>
            <p className="greeting">
              Welcome back to your
              <span className="money-manager-text-style"> Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              balance={totalAmount}
              income={totalIncome}
              expenses={totalExpenses}
            />
          </div>
          <div className="transaction-container">
            <form
              className="transaction-form"
              onSubmit={this.onsubmitTransaction}
            >
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="titleInputBox" className="label-elm">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                className="input-box"
                id="titleInputBox"
                onChange={this.onUpdateTitleInput}
                value={titleInput}
              />
              <label htmlFor="amountInputBox" className="label-elm">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="input-box"
                id="amountInputBox"
                onChange={this.onUpdateAmountInput}
                value={amountInput}
              />
              <label htmlFor="typeSelectBox" className="label-elm">
                TYPE
              </label>
              <select
                className="input-box"
                onChange={this.onUpdateOptionId}
                value={optionId}
                id="typeSelectBox"
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="transaction-heading">History</h1>
              <div>
                <ul className="table-main">
                  <li className="table-row-container">
                    <p className="table-heading">Title</p>
                    <p className="table-heading">Amount</p>
                    <p className="table-heading">Type</p>
                    <p className="table-heading blank">.</p>
                  </li>
                  {transactionsHistory.map(eachHistory => (
                    <TransactionItem
                      key={eachHistory.id}
                      historyDetails={eachHistory}
                      getDeleteHistoryItem={this.getDeleteHistoryItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
