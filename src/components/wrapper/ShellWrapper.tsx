import { Link, useLocation } from 'react-router-dom';

const ShellWrapper = (props) => {
  const {pathname} = useLocation();

  const showBackBtn = pathname !== '/products' && pathname !== '/';

  return (
    <div className="app">
      <div className="app__header">
        <img src="/assets/img/logo.svg" alt="logo" className="app__logo" />
      </div>

      <div className="app__content">
        <div className="app__nav">
          {showBackBtn && (
            <Link to="products" id="app__nav__goBack" className="active">
               Go BACK
            </Link>
          )}
          <Link to="products" className="active">
            Pizzas
          </Link>
        </div>

        <div className="app__container">
          {props.children}
        </div>

        <div className="app__footer">
          <p>&copy; Pizza Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default ShellWrapper;
