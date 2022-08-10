import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = () => {
 let nums = [...Array(5).keys()]

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