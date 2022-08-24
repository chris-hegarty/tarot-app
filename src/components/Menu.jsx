import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Menu(){
        //Need the following pieces for the logged out button:
    //loggedInUser && logout from UserConetxt
    const{loggedInUser, logout} = useContext(UserContext);

    return(
        <>
        <nav>
            <ul>
            {loggedInUser && (
                    <>
                    <li>
                        <NavLink to={"/home"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        onClick={() => {
                            logout()
                        }}
                        to={"/login"}
                        >Logout</NavLink>
                    </li>
                    </>
                )
            }
            {/* Now set what the NOT loggedin user sees:  */}
            {!loggedInUser && (
                <>
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </li>
                </>
                )
            }
            </ul>
        </nav>
    </>
    )
}

export default Menu;
