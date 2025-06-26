import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import ProductItem from './ProductItem';
import AuthContext from '../../context/AuthContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Error deleting product');
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        {user && <Link to="/products/new" className="btn btn-primary">Add Product</Link>}
      </div>
      <div className="row">
        {products.length === 0 ? (
          <div className="col-12">
            <p>No products found</p>
          </div>
        ) : (
          products.map(product => (
            <ProductItem 
              key={product._id} 
              product={product} 
              onDelete={handleDelete} 
              canEdit={!!user}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;