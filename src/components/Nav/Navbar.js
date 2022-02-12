import Nav from 'react-bootstrap/Nav';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import CartIcon from './cart/CartIcon';
import NavMiddleItems from './NavMiddleItems';

export default function Navbar() {
    
    return (
        <Nav
            activeKey="/home"
            className=" navbar-container d-flex align-items-center m-lg-2 m-md-2 px-sm-3 px-3  "
            role="navigation"
        >

            {/* 1. menu logo for small screen */}
            <NavMenu />


            {/* 2. "sneakers" logo */}
            <NavLogo />



            {/* 3. all middle Items */}
            <NavMiddleItems />


            {/* 4. cart logo and avatar */}
            <Nav.Item id="cart-avatar-container">
                <CartIcon />
                
                <span id="profile-avatar" ></span>
            </Nav.Item>


        </Nav>
    )
}