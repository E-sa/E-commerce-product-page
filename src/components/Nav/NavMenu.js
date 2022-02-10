import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
const navItems = ["Collections", "Men", "Women", "About", "Contact"]

export default function NavMenu() {

    const [isMenu, setMenu] = useState(false);

    return (
        <>

            {/* 1.this menu logo appears in small screen. */}
            <Nav.Item
                id='nav-menu-logo'
                className='nav-menu-logo d-lg-none d-md-none d-sm-inline d-inline'
                onClick={() => setMenu(true)}
            ></Nav.Item>


            {/* 2.menu box container */}
            {isMenu &&
                <div className="menu-container">

                    <div id="on-menu-shadow" onClick={() => setMenu(false)} ></div>

                    {/* 2.1 close button: it closes the menu box */}
                    <span id="menu-close" onClick={() => setMenu(false)}></span>

                    {/* 3. maps items inside menu */}
                    <div className="mt-5 mt-5 ml-3 ">
                        {
                            navItems.map((item, index) =>

                                <Nav.Item
                                    key={index}
                                    className='menu-items-container'
                                >

                                    <Nav.Link
                                        className='mt-3'
                                        id="menu-items">
                                        {item}
                                    </Nav.Link>

                                </Nav.Item>
                            )

                        }
                    </div>


                </div>

            }


        </>
    )

}