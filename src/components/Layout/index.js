import './index.css'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => (
  <div className="layout-parent-container">
    <div className="layout-child-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
