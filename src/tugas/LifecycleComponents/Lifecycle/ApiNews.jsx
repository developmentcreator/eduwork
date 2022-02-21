
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import CardCustom from "./CardCustom";
import { BallTriangle } from "react-loader-spinner"
import Search from "./Search";


const ApiNews = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            "https://newsapi.org/v2/top-headlines?country=id&apiKey=4d99d2c9ab144aa59f62b17b7a648d64"
        );
        setData(result.data.articles);
        setLoading(false);
        };
        fetchData();
    }, []);
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=id&apiKey=4d99d2c9ab144aa59f62b17b7a648d64&q=${search}`
        )
        .then((res) => {
            setData(res.data.articles);
            setLoading(false);
        })
        .catch((err) => {
            setError(true);
            setLoading(false);
        });
    };
    
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://www.logolynx.com/images/logolynx/b1/b1e6e8c8c9e9f7d1c9f9e8b8f9e8b8f9.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{" "}
                    News API
                </Navbar.Brand>
            </Navbar>
            <Search
                search={search}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <div className="container">
                <div className="row">
                    {loading ? (
                        <div className="col-md-12">
                            <BallTriangle
                                color="#FFF"
                                loading={loading}
                                size={100}
                            />
                        </div>
                    ) : error ? (
                            <div className="col-md-12">
                                <h1>Data Not Found</h1>
                        </div>
                    ) : (
                        data.map((val, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <CardCustom
                                        title={val.title}
                                        author={val.author}
                                        urlToImage={val.urlToImage}
                                        description={val.description}
                                        publishedAt={val.publishedAt}
                                        content={val.content}
                                        url={val.url}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApiNews;