import Hedaer from '../components/Header'
import Sidebar from "./Sidebar"

function DefaultLayout({ children }) {
  return (
    <div>
      <Hedaer />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
