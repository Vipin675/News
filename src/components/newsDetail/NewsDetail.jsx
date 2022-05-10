import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./newsDetail.css";


const NewsDetail = () => {

  const [newsDetail, setNewsDetail] = useState([]);

  const getNewsDetail = () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=3c5615828edb417a8888c2d7b6f2102a").then(
      (response) => {
        // console.log(response.data.articles[0].urlToImage);
        setNewsDetail(response.data.articles);
      }
    ).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getNewsDetail();
  }, []);

  return (
    <>
      <div className='newsDetail__Container'>
        <div className="container mt-5">
          <h1 className='text-start' >Lorem ipsum dolor sit amet consectetur adipisicing elit Tempora, quis thos</h1>
          <p className='fw-lighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam eum eos eveniet veniam modi neque quaerat odit ducimus, illum optio provident velit, a, labore quia. Doloremque nesciunt repellat vitae beatae temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda perferendis optio rerum animi alias, dicta quas. Aspernatur quis numquam consequuntur voluptas explicabo et, veritatis vero ad, animi iste laudantium adipisci sint eos.</p>
          <div className="newsDetailContainer">
            <div className="card">
              <img className="img-fluid mx-auto" src="https://www.reuters.com/resizer/VpZlMcXtAuRzDhrZqXZUaoUPFac=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3CGMRDNO4RO73BNVX4UO3YI4RE.jpg" alt="..." />
              <div className="card-body">
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione repellat quisquam velit fugit voluptates vitae officia autem, recusandae sequi architecto beatae. Consectetur corrupti distinctio placeat, quas et veniam officia nostrum nihil illum impedit numquam tenetur sed iure enim, maiores eveniet, at harum ipsam qui obcaecati dignissimos! Totam error quas, nihil laboriosam quae ullam doloremque veniam amet mollitia deserunt velit possimus ex alias rem omnis dolorum reiciendis. Animi tenetur dolorum necessitatibus modi placeat, tempore quibusdam, saepe suscipit at repellendus magni fugit maxime provident molestiae autem nemo porro deleniti nisi fuga velit earum expedita! Necessitatibus neque accusantium tenetur nostrum non similique.</p>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione repellat quisquam velit fugit voluptates vitae officia autem, recusandae sequi architecto beatae. Consectetur corrupti distinctio placeat, quas et veniam officia nostrum nihil illum impedit numquam tenetur sed iure enim, maiores eveniet, at harum ipsam qui obcaecati dignissimos! Totam error quas, nihil laboriosam quae ullam doloremque veniam amet mollitia deserunt velit possimus ex alias rem omnis dolorum reiciendis. Animi tenetur dolorum necessitatibus modi placeat, tempore quibusdam, saepe suscipit at repellendus magni fugit maxime provident molestiae autem nemo porro deleniti nisi fuga velit earum expedita! Necessitatibus neque accusantium tenetur nostrum non similique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetail