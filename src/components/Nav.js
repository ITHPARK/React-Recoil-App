import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className='nav_inner'>
        <h2>
            <Link to="/">CAFE</Link>
        </h2>
        <div className='nav_right'>
          <ul>
            <li>
              <Link>카페글</Link>
            </li>
            <li>
              <Link>관리자</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav