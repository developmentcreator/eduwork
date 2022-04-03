// import React from "react";
// import axios from "axios";


// export default class Integrasi extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             isLoading: true,
//             search: '',
//         };
//     }

//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         axios
//           .get(`http://localhost:3000/api/v4/product`)
//           .then((res) => {
//             this.setState({
//               data: res.data.data,
//               isLoading: false,
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//     }

//     handleChange = (e) => {
//         this.setState({
//             search: e.target.value,
//         });
//     }

//     render() {
//         const { data, isLoading, search } = this.state;
//         const filteredData = data.filter((item) => {
//             return item.name.toLowerCase().includes(search.toLowerCase());
//         });
//         return (
//             console.log(JSON),
//             <div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="card">
//                                 <div className="card-header">
//                                     <h4>Integrasi</h4>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className="row">
//                                         <div className="col-md-12">
//                                             <div className="form-group">
//                                                 <label>Search</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Search"
//                                                     onChange={this.handleChange}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-md-12">
//                                             <table className="table table-bordered">
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Name</th>
//                                                         <th>Price</th>
//                                                         <th>Stock</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {isLoading ? (
//                                                         <tr>
//                                                             <td colSpan="3">
//                                                                 <div className="text-center">
//                                                                     <div className="spinner-border text-primary" role="status">
//                                                                         <span className="sr-only">Loading...</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </td>
//                                                         </tr>
//                                                     ) : (
//                                                         filteredData.map((item) => {
//                                                             return (
//                                                                 <tr key={item.id}>
//                                                                     <td>{item.name}</td>
//                                                                     <td>{item.price}</td>
//                                                                     <td>{item.stock}</td>
//                                                                 </tr>
//                                                             );
//                                                         })
//                                                     )}
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

