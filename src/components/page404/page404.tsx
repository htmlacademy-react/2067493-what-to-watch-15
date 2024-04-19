import { Link } from 'react-router-dom';
import { Addresses } from '../../const';

function Page404() {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

      </section>
      <main>
        <h1 style={{ textAlign: 'center' }}>Error 404. Page not found</h1>
        <Link to={Addresses.Main}><h2 style={{ textAlign: 'center', textDecoration: 'underline', color: 'blue' }}>Return to main page</h2></Link>
      </main>
    </>
  );
}

export default Page404;
