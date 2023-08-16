import { Link } from 'react-router-dom';

export const ShellWrapper = (props) => {
  return (
    <div className="app">
      <div className="app__header">
        <img src="/assets/img/logo.svg" alt="logo" className="app__logo" />
      </div>

      <div className="app__content">
        <div className="app__nav">
          <Link to="products" className="active">
            Pizzas
          </Link>
        </div>

        <div className="app__container">
          {props.children}
        </div>

        <div className="app__footer">
          <p>&copy; Ultimate Pizza Inc.</p>
        </div>
      </div>
    </div>
  );
};
