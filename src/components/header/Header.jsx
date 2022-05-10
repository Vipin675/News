import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./header.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Axios from 'axios';


const Header = () => {

    const [headingNews, setHeadingNews] = useState([]);

    const getNews = () => {
        Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=3c5615828edb417a8888c2d7b6f2102a").then(
            (response) => {
                // console.log(response.data.articles);
                setHeadingNews(response.data.articles);
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
            <div className="header__container container">
                <h1 className='text-center m-3'>News</h1>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {headingNews.map((item) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div className="p-4 p-md-5 text-white rounded bg-dark">
                                        <div className="col-md-12 px-0 ">
                                            <div className="row d-flex flex-row justify-content-center">
                                                <div className='col'>
                                                    <div className="news__content">
                                                        <h2 className="font-weight-bolder">{item.title}</h2>
                                                        <p className="lead my-3">{item.content}</p>
                                                        <p className="lead mb-0">
                                                            <Link className="text-white fw-bold" to='/detail'>Continue reading...</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <img className='rounded float-end ' src={item.urlToImage} alt="img not available" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>

                <div className="row align-items-md-stretch py-8">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="bg-light row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Title</strong>
                                    <h3 className="mb-0">Featured post</h3>
                                    <div className="mb-1 text-muted">Nov 12</div>
                                    <p className="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nemo distinctio dicta debitis </p>
                                    <Link className="text-white fw-bold" to='/detail'>Continue reading...</Link>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" bg-light row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success">Title</strong>
                                    <h3 className="mb-0">Post title</h3>
                                    <div className="mb-1 text-muted">Nov 11</div>
                                    <p className="mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nemo distinctio dicta debitis </p>
                                    <Link className="text-white fw-bold" to='/detail'>Continue reading...</Link>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header