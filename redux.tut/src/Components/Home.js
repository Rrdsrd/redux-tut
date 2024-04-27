import React from 'react'
const Home=(props)=>{
    console.warn("Props",props)

    return(
        <div>
           
        <h2>Home Component</h2>
          <div className='cart-wrapper'>
             <div className='img-wrapper item'>
                <img src="https://pngimg.com/uploads/smartphone/smartphone_PNG8514.png"/>
             </div>
             <div className='text-wrapper item'>
                <span>I_Phone</span>
                <span>Price:$10000</span>
             </div>
             <div className="btn-wrapper item">
             <button 
             onClick={
                 ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                 }>
                 Add To Cart</button>
          </div>
          </div>
        </div>
    )
}
export default Home;