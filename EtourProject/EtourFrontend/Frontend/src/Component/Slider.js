import React from 'react'
import {Carousel} from 'react-bootstrap'



const Slider = () => {
    return (
        <div >
        
            <Carousel className='crs'>
                <Carousel.Item interval={1000} >
                    <img

                        src={"images/2-Europe.jpg"}
                        alt="First slide"
                        style={{
                            width:"100%",
                            height:"100%",
                            objectFit: 'fill' 
                        }}
                    />
                   
                </Carousel.Item>
                 <Carousel.Item interval={1000}>
                    <img
                        src={"Images/3-Kerala.jpg"}
                        alt="Second slide"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: 'fill' 
                        }}
                    />
                    
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                     
                        src={"Images/4-Andaman.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit:'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        
                        src={"Images/4-Australia.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100vw", 
                            height: "100%",
                            objectFit: 'fill' 
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                       
                        src={"Images/4-Dussehra.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100vw", 
                            height: "100%",
                            objectFit: 'fill' 
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/5-Last.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/5-Rajsthan.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/6-Dubai.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/Lehladakh.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/South.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/luxury.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
                <Carousel.Item  interval={1000}>
                    <img
                        className="d-block w-100"
                        src={"Images/wedding.jpg"}
                        alt="Third slide"
                        style={{
                            width: "100%", 
                            height: "100%",
                            objectFit: 'fill'
                        }}
                    />
                   
                </Carousel.Item>
              
            </Carousel></div>
       
    )
}

 export default Slider

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// export default function Slider() {
//   return (
//     <Carousel data-bs-theme='dark'>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/2-Europe.jpg"}
//           alt='First slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/3-Kerala.jpg"}
//           alt='First slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/4-Andaman.jpg"}
//           alt='First slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/4-Australia.jpg"}
//           alt='Second slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/4-Dussehra.jpg"}
//           alt='Third slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/5-Last.jpg"}
//           alt='Third slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/5-Rajsthan.jpg"}
//           alt='Third slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={"Images/6-Dubai.jpg"}
//           alt='Third slide'
//         />
//         <Carousel.Caption></Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }