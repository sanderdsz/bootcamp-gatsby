import React from "react"
import { Link } from "gatsby"

const SideNavigation = props => {
  return (
    <div className="sideNavigation">
        <nav>
            <ul className="nav-list">
                <li>
                    <Link
                        className="shiver-button-secondary-light"
                        activeClassName="active-shiver-button-secondary-light"
                        to="/"
                    >
                        home
                    </Link>
                </li>
            </ul>
      </nav>
    </div>
  )
}

export default SideNavigation