import Nav from 'react-bootstrap/Nav';



export default function NavLogo() {
    return (
        <Nav.Item
         className="logo-container mt-sm-3 mt-3" 
        >
            <Nav.Link 
            id="logo" 
            className='nav-link' 
            aria-label="visit home page"
            href="/">
            </Nav.Link>
            
        </Nav.Item>
    )
}