/*  judul:string
    harga:number
*/
class Buku {
  judul;
  harga;

  constructor(setJudul, setHarga) {
    this.judul = setJudul;
    this.harga = setHarga;
  }

  cetak() {
    console.log(`Judul buku: ${this.judul}`);
    console.log(`Harga buku: ${this.harga}`);
  }

  updateJudul(judulBaru) {
    this.judul = judulBaru;
  }

  updateHarga(hargaBaru) {
    this.harga = hargaBaru;
  }
}

const bukuPertama = new Buku("harry potter", 200000);
bukuPertama.cetak();

const bukuKedua = new Buku("indonesia merdeka", 100000);
bukuKedua.cetak();

bukuKedua.updateJudul("idonesia bahagia");
bukuKedua.cetak();

bukuKedua.updateHarga(50000);
bukuKedua.cetak();
