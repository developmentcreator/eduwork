import axios from 'axios';
import { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);

  const getData = useCallback(async () => {
    try {
      await axios
        .get(`http://localhost:3000/api/v4/product/${id}`)
        .then((res) => {
          setName(res.data[0].name);
          setPrice(res.data[0].price);
          setStock(res.data[0].stock);
          setStatus(res.data[0].status);
          console.log(res.data , 'ini data');
        })
    } catch (error) {
      console.log(error.message, 'ini errornya');
    }
  }, [id])

  useEffect(() => {
    getData();
  }, [getData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:3000/api/v4/product/edit/${id}`, {
          name,
          price,
          stock,
          status,
        })
        .then((res) => {
          console.log(res.data, 'ini data');
          history.push("/");
        })
    } catch (error) {
      console.log(error.message, 'ini errornya');
    }
  }



  

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name, 'ini name');
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(price, 'ini price');
  };

  const handleStock = (e) => {
    setStock(e.target.value);
    console.log(stock, 'ini stock');
  };

  const handleStatus = (e) => {
    setStatus(e.target.checked);
    console.log(status, 'ini status');
  };

 

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={handleName} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={handlePrice} />
          <Input name="stock" type="number" placeholder="Stok Produk..." label="Stok" value={stock} onChange={handleStock} />
          <Input name="status" type="checkbox" placeholder="Status Produk..." label="Tersedia" checked={status} onChange={handleStatus} />
          <b className="btn btn-primary" type="submit">Simpan</b>
        </form>
      </div>
    </div>
  )
}

export default Edit;