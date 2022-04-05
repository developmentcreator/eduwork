import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Input from "../../components/Input";

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);

  const getData = useCallback(async () => {
    try {
      await axios
        .get(`http://localhost:3000/api/v4/product/${id}`)
        .then((res) => {
          console.log(res.data);
          setName(res.data[0].name);
          setPrice(res.data[0].price);
          setStock(res.data[0].stock);
          setStatus(res.data[0].status);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:3000/api/v4/product/${id}`, ({ name, price, stock, status }))
        .then((res) => {
          console.log(res.data);
          history.push("/");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    console.log(price);
  };

  const handleChangeStock = (e) => {
    setStock(e.target.value);
    console.log(stock);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.checked);
    console.log(status);
  };



  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={handleChangeName} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={handleChangePrice} />
          <Input name="stock" type="number" placeholder="Stok Produk..." label="Stok" value={stock} onChange={handleChangeStock} />
          <Input name="status" type="checkbox" placeholder="Status Produk..." label="Status" value={status} onChange={handleChangeStatus} />
          <b className="btn btn-primary" onClick={handleSubmit}>Simpan</b>
        </form>
      </div>
    </div>
  )
}

export default Edit;