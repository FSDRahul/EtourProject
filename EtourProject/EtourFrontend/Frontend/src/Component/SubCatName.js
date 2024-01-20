import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardComp from './CardComp';
// import { NavLink } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; // Make sure to import the Button component
export function SubCatName() {

  let navigate = useNavigate();
  const [posts, setTours] = useState([]); // Change state variable name to 'posts'
  const { subCatId } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/category_master/bysubcatId/" + subCatId)
      .then(res => res.json())
      .then(result => {
        setTours(result); // Update state variable
      });
  }, []);

  console.log(posts);

  return (
    <div>
      <div className="d2">
        {posts.map(card => (
          <div key={card.catMasterId}>
            <CardComp title={card.catName} 
              imgsrc={card.catImagePath} />
            
              <Button onClick={()=>navigate(`/bypkgId/${card.catMasterId}`)}>View Details</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCatName;
