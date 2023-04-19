import './index.css'

const TabItem = props => {
  const {tabDetails, tabItemSelected} = props
  const {tabId, displayText} = tabDetails

  const tabOnclick = () => {
    console.log(tabId)
    tabItemSelected(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={tabOnclick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
