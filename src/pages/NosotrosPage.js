import React from 'react'
import "../styles/components/pages/NosotrosPage.css"




const NosotrosPage = (props) => {
  return (
    <main className='holder'>
      <div className='container'>
      <div className='columnas'>
        <h2>Historia</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Est deleniti voluptate, assumenda velit repudiandae temporibus
           excepturi amet veniam quos in corporis nemo similique quis nostrum
            reiciendis! Ea sapiente temporibus, voluptatem rerum molestiae 
            aliquid ipsa vero neque inventore. Repudiandae, voluptate odio?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Consequatur doloribus dicta voluptatem aperiam sint architecto culpa,
               reiciendis animi illum in aliquam dolore rem eligendi amet.</p>
      </div>
      <div className='staff'>
        <h2>Staff</h2>
        <div className='personas'>
          <div className='persona'>
            <h5>Micaela Contrerz</h5>
            <h6>Gerente General</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Consequatur doloribus dicta voluptatem aperiam sint architecto culpa,
               reiciendis animi illum in aliquam dolore rem eligendi amet.</p>
          </div>
        </div>
      </div>
      </div>
      
    </main> 
  )
}

export default NosotrosPage