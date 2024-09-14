import './index.css'

const BrowserItem = props => {
  const {item, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const delet = () => {
    onDelete(id)
  }
  return (
    <li className="listItem">
      <div className="first">
        <p className="time">{timeAccessed}</p>
        <div className="second">
          <img className="logo" src={logoUrl} alt="logourl" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <img
        className="dltlogo"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={delet}
      />
    </li>
  )
}

export default BrowserItem
