import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const NovedadesPages = (props) => {
  return (

    
    <div className='container'>
      <h1 className='text-center'>NUEVOS PRODUCTOS</h1>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://ardiaprod.vtexassets.com/arquivos/ids/219774/Yerba-Mate-Union-Suave-4-Flex-500-Gr-_1.jpg?v=637790486882400000" width={50} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Producto Nuevo</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/alfajor-havanna-chocolae-6-unidades1-f8ee7f664f38a2162215946579351831-640-0.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Producto Nuevo</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.deliargentina.com/image/cache/catalog/product/alimentacion/bizcochitos-salados-de-grasa-don-satur-argentinos/don-satur-bizcocho-salado-argentina-3-unidades-500x500.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Producto Nuevo</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    
  )
}

export default NovedadesPages
