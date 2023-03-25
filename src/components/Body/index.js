import './index.css'
import ConfigureContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigureContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbarMenu = () => (
        <div className="left-nav-container">
          <ul className="list-items">
            <h1 className="left-nav-header"> Left Navbar Menu</h1>
            <p className="item">item1</p>
            <p className="item">item2</p>
            <p className="item">item2</p>
            <p className="item">item4</p>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <div>
            <h1 className="left-nav-header">Content</h1>
            <p className="item">
              Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do
              eiusmod tempor incldldunt ut labore et dolore manga aliqua . Ut
              enim ad minimveniam.
            </p>
          </div>
        </div>
      )

      const renderRightNavbarMenu = () => (
        <div className="left-nav-container">
          <div>
            <h1 className="left-nav-header">Right Navbar</h1>
            <div className="child-container">
              <p className="add">Ad 1</p>
            </div>
            <div className="child-container">
              <p className="add">Ad 2</p>
            </div>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbarMenu()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbarMenu()}
        </div>
      )
    }}
  </ConfigureContext.Consumer>
)

export default Body
