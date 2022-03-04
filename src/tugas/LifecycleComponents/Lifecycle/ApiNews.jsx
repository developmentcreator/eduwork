
import React from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import CardCustom from "./CardCustom";
import { BallTriangle } from "react-loader-spinner"
import Search from "./Search";

export default class ApiNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        isLoading: true,
        search: "",
        };
    }
    
    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=id&apiKey=4d99d2c9ab144aa59f62b17b7a648d64&q=${this.state.search}`
        )
        .then((res) => {
            this.setState({
            data: res.data.articles,
            isLoading: false,
            });
        });
    };
   
    handleChange = (e) => {
        this.setState({
        search: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
        isLoading: true,
        });
        this.getData();
    }

    render() {
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
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
            <div className="container">
                <div className="row">
                    {this.state.isLoading ? (
                        <div className="col-md-12">
                            <BallTriangle
                                color="#FFF"
                                loading={this.state.isLoading}
                                size={100}
                            />
                        </div>
                    ) : (
                            <div className="row">
                                {this.state.data.map((val, index) => {
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
                                })}
                            </div>
                        )}
                </div>
            </div>
            </div>
        );
    }
}