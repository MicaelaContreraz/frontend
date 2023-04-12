import React from 'react'
import Card from 'react-bootstrap/Card';
import "../styles/components/pages/HomePage.css"

const HomePage = (props) => {
  return (
    <>
    <div className='container product'>

    <h1 className='text-center'>PRODUCTO ARGENTINO</h1>
    </div>
        <Card className="bg-dark text-white">
      <Card.Img src="https://pampadirect.com/product_images/uploaded_images/productos-argentinos-online.png" width={100}/>
      <Card.ImgOverlay>
        <Card.Title class="text-secondary fs-2 w-700 text-center fw-bold text-lowercase">¨Product</Card.Title>
        
      </Card.ImgOverlay>
    </Card>
    </>
    
  )
}

export default HomePage
