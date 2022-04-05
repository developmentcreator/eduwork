import { Link } from "react-router-dom";
import './index.scss';
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const Detail = () => {
  const { id } = useParams();
  const [display, setDisplay] = useState([]);
  

  const getData = useCallback(async () => {
    try {
      await axios
        .get(`http://localhost:3000/api/v4/product/${id}`)
        .then((res) => {
          setDisplay(res.data);
          console.log(res.data);
        })
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);
  
  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>
      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{display.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{display.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{display.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{display.stock}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{display.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;

            

  