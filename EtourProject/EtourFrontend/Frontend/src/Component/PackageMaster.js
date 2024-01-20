import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardComp from './CardComp';

function PackageMaster() {
  const [post, setPost] = useState([]);
  const { catMasterId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/package_master/catmaster/" + catMasterId)
      .then(res => res.json())
      .then(result => setPost(result));
  }, []);

  return (

    <div>
    <div className="d2">
      {post.map(category => (
        <div className="card text-center" key={category.pkgName}>
          <div className="card-body">
            <h5 className="card-title">{category.pkgName}</h5>
            {/* <p className="card-text">{category.catImagePath}</p> */}
            <Button onClick={() => navigate(`/bycostMasterId/${category.pkgId}`)}>View Details</Button>
            
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default PackageMaster;