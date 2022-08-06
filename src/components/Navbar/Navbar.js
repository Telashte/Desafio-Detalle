import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <h1>Blythe</h1>
        <div>
          <Link to='/category/nintendo'>Nintendo</Link>
          <Link to='/category/sony'>Sony</Link>
          <Link to='/category/microsoft'>Microsoft</Link>
        </div>
      </nav>
    )
}
  
export default Navbar