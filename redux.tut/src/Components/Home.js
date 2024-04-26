import React from 'react'
const Home=()=>{

    return(
        <div>
            <div className='add-to-cart'>
               <img src="https://static.vecteezy.com/system/resources/previews/000/442/286/original/vector-add-to-cart-vector-icon.jpg"/>
            </div>
        <h2>Home Component</h2>
          <div className='cart-wrapper'>
             <div className='img-wrapper item'>
                <img src="https://pngimg.com/uploads/smartphone/smartphone_PNG8514.png"/>
             </div>
             <div className='text-wrapper item'>
                <span>I_Phone</span>
                <span>Price:$10000</span>
             </div>
             <div className='btn-wrapper item'>
               <button>Add to cart</button>
             </div>
          </div>
          
        </div>
    )
}
export default Home;