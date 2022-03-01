import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <div className="main">
          <h1>Home Page</h1>
          <ul>
              <li><Link to="/post/1">satu</Link></li>
              <li><Link to="/post/2">dua</Link></li>
              <li><Link to="/post/3">tiga</Link></li>
          </ul>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nam a eius dolorum accusantium, tenetur ipsum voluptates qui laudantium adipisci maxime ad commodi nulla assumenda at esse vel reprehenderit aliquid.</p>
    </div>
  )
}

export default Home;