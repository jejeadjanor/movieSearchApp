import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Moviesnav extends Component {
    render() {
      return (
        <div  className='navDecoration' >
            <ul>
                <li><Link to='/'>MovieSearchSite</Link></li>
            </ul>
        </div>
      );
    }
  }
  
  export default Moviesnav;