import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#f0f0f0',  // Set background color
      display: 'flex',              // Use flexbox for layout
      justifyContent: 'space-around', // Distribute items evenly
      padding: '10px'              // Optional: Add padding for better spacing
    }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/services" style={{ margin: '10px' }}>Services</Link>
      <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
