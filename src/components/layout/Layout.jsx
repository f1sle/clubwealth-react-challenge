export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <img
          src="assets/logo.png"
          alt="ClubWealth logo"
          width="100px"
          height="30px"
        />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
