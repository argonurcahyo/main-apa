import React from 'react'
import { NavLink } from 'react-router-dom'

const PathNavLink = (props) => (
 <NavLink isActive={(_, { pathname }) => pathname == props.to} {...props} />
);

export default PathNavLink