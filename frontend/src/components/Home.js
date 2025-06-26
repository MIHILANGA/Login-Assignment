import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center mt-5">
      <h1>Welcome to E-Commerce App</h1>
      {user ? (
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          View Products
        </Link>
      ) : (
        <div className="mt-3">
          <Link to="/login" className="btn btn-primary btn-lg me-3">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary btn-lg">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;