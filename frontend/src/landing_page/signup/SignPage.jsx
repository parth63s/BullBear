import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp.jsx';

function SignPage({s = 0}) {
    const [selectedMenu, setSelectedmenu] = useState(s);
    const handleMenuClick = (index) => {
        setSelectedmenu(index);
    }
    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    return ( 
        <div className="container">
            <div className='row mt-4'>
                <div className='offset-4 col-2 text-center '>
                    <Link style={{textDecoration: "none"}} to="/signup" onClick={() => handleMenuClick(0)}>
                        <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Sign Up</p>
                    </Link>
                </div>
                <div className=' col-2 text-center'>
                    <Link style={{textDecoration: "none"}} to="/signin" onClick={() => handleMenuClick(1)}>
                        <p className={selectedMenu == 1 ? activeMenuClass : menuClass}>Sign In</p>
                    </Link>
                </div>
            </div>
            {(selectedMenu == 0) ? <SignUp/> : <SignIn/>}
        </div>
     );
}

export default SignPage;