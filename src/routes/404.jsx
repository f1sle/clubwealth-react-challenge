import Button from "../components/button/Button"

export default function Page404() {
  return (
    <section className="centerContent">
      <h1 className="pageErrorCode">404</h1>
      <h2>Page not found</h2>
      <Button text="Back" link="/" />
    </section>
  )
}