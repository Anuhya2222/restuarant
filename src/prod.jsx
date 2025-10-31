// export default function Product_cls() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

import React ,{Component} from 'react'; 
import './prod.css'


class Product_cls extends Component{
    render(){
        return (
            <div className='product_s'>
                <div>
                <p>NEW PRODUCT</p>
                <p>the twist of healthy yogurt</p>
                <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
                </div>
                <div>
                <img src="https://sample-website-pi.vercel.app/images/yogurt.jpg" height="180px"/>
                </div>
            </div>
        )
    }
}

export default Product_cls