// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, getDeleteHistoryItem} = props
  const {title, amount, type, id} = historyDetails

  const onDeleteHistoryItem = () => {
    getDeleteHistoryItem(id)
  }

  return (
    <li className="table-data-container">
      <p className="table-data">{title}</p>
      <p className="table-data">Rs {amount}</p>
      <p className="table-data">{type}</p>
      <div className="table-data">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onDeleteHistoryItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
