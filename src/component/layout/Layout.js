import './layout.css'

const Layout = ({children, state}) =>{
  return(
    <div className={state ? 'layout overflow' : 'layout' }>
      {children}
    </div>
  )
}

export default Layout