import { Link } from 'react-router-dom';

export default function Logo({width = '100px', height = '30px'}) {
  return (
    <Link to="/">
      <img
      src={process.env.PUBLIC_URL + "/assets/logo.png"}
      alt="ClubWealth logo"
      width={width}
      height={height}
    />
    </Link>
  )
}