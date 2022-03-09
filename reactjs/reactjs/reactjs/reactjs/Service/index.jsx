import { Routes, Route, useMatch } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Service = () => {
    const match =useMatch();
  return (
    <div className="main">
          <h1>Service Page</h1>
          <ul>
              <li><Link to={`${match.url}/computer`}>Computer</Link></li>
              <li><Link to={`${match.url}/smartphone`}>Smartphone</Link></li>
          </ul>
          <hr />
          <Routes>
              <Route path='/service/computer'>
                komputer, CPU, Monitor dll
              </Route>
          </Routes>
          <Routes>
              <Route path='/service/smartphone'>
                Asus, I phone, Xiaomi dll
              </Route>
          </Routes>
    </div>
  )
}

export default Service;