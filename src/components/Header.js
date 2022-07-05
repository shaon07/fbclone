
const Header = () => {
  return (
    <header className="top-header">
        <div className="row-1">
          <div className="container flex">
            <h2 className="logo">facebook</h2>
            <div className="menus">
              <i className="bi bi-search menu search"></i>
              <i className="bi bi-messenger menu"></i>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="container">
            <nav>
              <ul>
                <li className="active bi bi-house-door"></li>
                <li className="bi bi-people"></li>
                <li className="bi bi-collection-play"></li>
                <li className="bi bi-shop"></li>
                <li className="bi bi-bell"></li>
                <li className="bi bi-list"></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header
