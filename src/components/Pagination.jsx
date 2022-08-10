import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = ({ num = 5 }) => {
 let nums = [...Array(num).keys()]

 return (
  <ul className="pagination">
   {nums.map((n, i) => (
    <li key={i} className='page-item'>
     <NavLink
      exact="true"
      to={`/page/${n + 1}`}
      className={`page-link`}
     >
      {n + 1}
     </NavLink>
    </li>
   ))}
  </ul>
 )
}

export default Pagination