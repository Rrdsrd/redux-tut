import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count"></span>
    <img src="https://static.vecteezy.com/system/resources/previews/000/442/286/original/vector-add-to-cart-vector-icon.jpg"/>
            </div>
        </div>
    )
}

export default Header;