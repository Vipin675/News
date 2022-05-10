import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "./News.css";
import { Link } from 'react-router-dom';
import Header from '../header/Header';

// https://newsapi.org/v2/top-headlines?country=us&apiKey=3c5615828edb417a8888c2d7b6f2102a

const News = () => {
    const [topHeadingNews, setTopHeadingNews] = useState([]);

    const getNews = () => {
        Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=3c5615828edb417a8888c2d7b6f2102a").then(
            (response) => {
                // console.log(response.data.articles);
                setTopHeadingNews(response.data.articles);
            }
        ).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getNews();
    }, []);


    return (
        <>
            <div className='news_container'>
            <Header/>
                <main>
                    <div className="album py-5">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {topHeadingNews.map((item) => {
                                    return (
                                        <>
                                            <div className="col">
                                                <div className="card shadow-sm">
                                                    <img src={item.urlToImage} alt="img not available" />
                                                    <div className="card-body">
                                                        <h5 className='text-center'>{item.title}</h5>
                                                        <p>{item.content}</p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="btn-group">
                                                                <Link to={`detail`}>
                                                                    <button type="button" className="btn  btn-sm btn-outline-secondary">Read in detail..</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default News


                                            // <div className='col'>
                                            //     <div className="card" style={{ width: "18rem;" }}>
                                            //         <img src={item.urlToImage} className="card-img-top" alt="Image not available" />
                                            //         <div className="card-body">
                                            //             <h5 className="card-title">{item.title}</h5>
                                            //             <p className="text-muted card-text">{item.content}</p>
                                            //             <a href="/" className="btn btn-primary">Read in detail...</a>
                                            //         </div>
                                            //     </div>
                                            // </div>