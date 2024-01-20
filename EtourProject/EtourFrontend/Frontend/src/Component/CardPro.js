import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import CardComp from './CardComp';
import { useNavigate } from 'react-router-dom';

export function CardPro() {
  const [post, setPost] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/category_master/bycat")
      .then(res => res.json())
      .then(result => setPost(result))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
  
    <div>
      <div className="d2">
        {post.map(category => (
          <div className="card text-center" key={category}>
            <div className="card-body">
              <h5 className="card-title">{category}</h5>
              {/* <p className="card-text">{category.catImagePath}</p> */}
              <Button onClick={() => navigate(`/bycatId/${category}`)}>View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default CardPro;

