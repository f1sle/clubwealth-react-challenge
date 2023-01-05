import { Link } from 'react-router-dom';

export default function Index() {
  return (
      <section id="main-page">
        <h1 className="textAlignCenter">React Coding Challenge</h1>
        <h2 className="textAlignCenter">Choose your API</h2>
        <nav className='apis-container'>
          <Link to="/cats">
            <figure className="api-endpoint">
              <img src={process.env.PUBLIC_URL + "/assets/cats.svg"} alt="black cat pictures on a white background" />
              <figcaption>Cats</figcaption>
            </figure>
          </Link>
          
          <Link to="/users">
            <figure className="api-endpoint">
              <img src={process.env.PUBLIC_URL + "/assets/people.svg"} alt="people pictures on a white background" />
              <figcaption>Users</figcaption>
            </figure>
          </Link>
        </nav>
      </section>
  )
}