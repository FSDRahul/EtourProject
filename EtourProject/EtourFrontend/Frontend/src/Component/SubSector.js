import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardComp from './CardComp';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Make sure to import the Button component

export function SubSector() {
  const [post, setPost] = useState([]);
  const { catId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/category_master/bycatId/" + catId)
      .then(res => res.json())
      .then(result => {
        setPost(result);
      });
  }, [catId]);

  return (
    
    <div>
    <div className="d2">
      {post.map(category => (
        <div className="card text-center" key={category}>
          <div className="card-body">
            <h5 className="card-title">{category}</h5>
            {/* <p className="card-text">{category.catImagePath}</p> */}
            <Button onClick={() => navigate(`/bysubcatId/${category}`)}>View Details</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default SubSector;





