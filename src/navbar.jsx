import React ,{Component} from 'react'; 
import './navbar.css'

class Nav_cls extends Component{
    render(){
        return (
            <div className='nav_s'>
                <img src="https://sample-website-pi.vercel.app/images/logo.png" alt="" height="80px" width="100px" />
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>contact</p>
            </div>
        )
    }
}

export default Nav_cls