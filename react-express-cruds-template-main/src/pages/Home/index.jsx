import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

    const getProducts = async () => {
      const result = await axios.get('http://localhost:3000/api/v4/product');
      setProducts(result.products.data);
    };
  
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/api/v4/product/${id}`);
    getProducts();
  };

    return (
      <div className="main">
        <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
        <div className="search">
          <input type="text" placeholder="Masukan kata kunci..." />
        </div>
        <table className="table">
           <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th className="text-right">Price</th>
               <th className="text-center">Action</th>
             </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td className="text-right">{product.price}</td>
                <td className="text-center">
                  <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
export default Home;
//             <td>1</td>
//             <td>Laptop</td>
//             <td className="text-right">RP. 20.000.000</td>
//             <td className="text-center">
//               <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
//               <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
//               <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Monitor</td>
//             <td className="text-right">RP. 10.000.000</td>
//             <td className="text-center">
//               <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
//               <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
//               <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Home;