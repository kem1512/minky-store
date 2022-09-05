import Hedaer from '../components/Header'

function DefaultLayout({ children }) {
  return (
    <div>
      <Hedaer />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
