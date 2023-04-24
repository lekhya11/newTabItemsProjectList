import './index.css'

const TabItem = props => {
  const {tabDetails, tabItemSelected, isCheckedValue} = props
  const {tabId, displayText} = tabDetails

  const tabOnclick = () => {
    console.log(tabId)
    console.log(isCheckedValue)
    tabItemSelected(tabId)
  }
  const classNameButton = isCheckedValue ? 'tab-btn-highlight' : 'tab-btn'
  return (
    <li className="tab-item-container ">
      <button type="button" className={classNameButton} onClick={tabOnclick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
