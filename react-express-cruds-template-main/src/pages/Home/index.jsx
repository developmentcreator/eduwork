import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';



const Home = () => {
  const [ product, setProduct ] = useState([]);

  const getData = useCallback( async () => {
    try {
      await axios
        .get('http://localhost:3000/api/v4/product')
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
    } catch (error) {
      console.log(error.message);
    }
  }, [])
  
  useEffect(() => {
    getData();
  },[getData])

  const deleteProduct = async (id) => {
    try {
      await axios
        .delete(`http://localhost:3000/api/v4/product/${id}`)
        .then((res) => {
          console.log(res.data);
          getData();
        })
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Stock</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td className="text-right">{item.price}</td>
              <td className="text-right">{item.stock}</td>
              <td className="text-center">
                <Link to={`/edit/${item.id}`} className="btn btn-warning">Edit</Link>
                <Link to={`/detail/${item.id}`} className="btn btn-info">Detail</Link>
                <Link to={`/delete/${item.id}`} className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
         
