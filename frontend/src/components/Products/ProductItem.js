import { Link } from 'react-router-dom';

const ProductItem = ({ product, onDelete, canEdit }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: ${product.price.toFixed(2)}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
          {canEdit && (
            <div className="d-flex justify-content-between">
              <Link to={`/products/edit/${product._id}`} className="btn btn-sm btn-outline-primary">
                Edit
              </Link>
              <button 
                onClick={() => onDelete(product._id)} 
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;