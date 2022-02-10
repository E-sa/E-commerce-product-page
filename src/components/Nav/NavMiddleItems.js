import Nav from 'react-bootstrap/Nav';

const navItems = ["Collections", "Men", "Women", "About", "Contact"]


export default function NavMiddleItems() {
    return (

        navItems.map((item, index) =>

            <Nav.Item
                key={index}
                className='d-lg-inline d-md-inline d-sm-none d-none mt-lg-3 mt-md-3'
            >
                <Nav.Link eventKey="link-1">{item}</Nav.Link>

            </Nav.Item>


        )
    )
}