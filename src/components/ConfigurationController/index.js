import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configure-container">
          <h1 className="header">Layout</h1>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="content"
              className="check-box"
              defaultChecked
              onChange={onToggleShowContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="left-nav-bar"
              className="check-box"
              defaultChecked
              onChange={onToggleShowLeftNavbar}
            />
            <label className="label" htmlFor="left-nav-bar">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              id="right-nav-bar"
              className="check-box"
              defaultChecked
              onChange={onToggleShowRightNavbar}
            />
            <label className="label" htmlFor="right-nav-bar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
