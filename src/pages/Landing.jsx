function Landing() {
  return (
    <section className="landing">
      <div className="orbit">
        <ul className="orbit-wrap">
          <li className="orbit-center">
            <i className="orbit-center__icon "></i>
          </li>

          <li>
            <ul className="ring-1">
              <li>
                <i className="orbit-icon ">Mojito</i>
              </li>
              <li>
                <i className="orbit-icon ">Cosmopolitan</i>
              </li>
              <li>
                <i className="orbit-icon ">Martini</i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li>
                <i className="orbit-icon ">Negroni</i>
              </li>
              <li>
                <i className="orbit-icon ">Aperol</i>
              </li>
              <li>
                <i className="orbit-icon ">Margarita</i>
              </li>
              <li>
                <i className="orbit-icon ">Manhattan</i>
              </li>
              <li>
                <i className="orbit-icon ">Gimlet</i>
              </li>
              <li>
                <i className="orbit-icon ">Daiquiri</i>
              </li>
              <li>
                <i className="orbit-icon "></i>
              </li>
              <li>
                <i className="orbit-icon "></i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-3">
              <li>
                <i className="orbit-icon ">Colada</i>
              </li>
              <li>
                <i className="orbit-icon "></i>
              </li>
              <li>
                <i className="orbit-icon "></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <article className="info-content">
        <h1>Discover Your New Poison</h1>
        <p>
          Welcome to Mixology! Your journey to finding the perfect
          thirst-quenching concoction starts now. Engulf yourself in our
          selection of tantalizing, potent, and at times outright bizarre
          libations that will leave you asking, &quot;Why didn&apos;t I find
          this sooner?&quot;
        </p>
      </article>
    </section>
  )
}
export default Landing
