import './not-found.css';
import {Link} from 'react-router-dom';

function NotFound (){
  return(
    <>
      <h1>404 Not Found</h1>
      <p className="zoom-area">
        <b>Страница не найдена.</b>Возможно она была, но исчезла из-за катастрофически быстрого сжатия под воздействием гравитационных сил. Но это ещё не точно.
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <button className='backHome'>
          <Link to='/'>
          Вернутся на главную
          </Link>
        </button>
      </div>
    </>
  );
}
export default NotFound;
