import axios from 'axios';
import { useState } from 'react';
import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:3000/api/v4/product', {
          name,
          price,
          stock,
          status
        })
        .then((res) => {
          console.log(res.data, 'berhasil');
        })
    } catch (error) {
      console.log(error.message);
    }
    console.log(name, price, stock, status);
  }

  const Name = (e) => {
    setName(e.target.value);
  }

  const Price = (e) => {
    setPrice(e.target.value);
  }

  const Stock = (e) => {
    setStock(e.target.value);
  }

  const Status = (e) => {
    setStatus(e.target.checked);
  }


  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama"  value={name} onChange={Name} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={Price} />
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={Stock} />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={Status} />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;