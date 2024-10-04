
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff", color: "#4A7766", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6tzwkSJr3mPy9yIuMQcpjV7AI-O7z8hXSA&s"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DevScripters
        </Typography>
        
        {/* Links */}
        <Button component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
          Home
        </Button>
        
        {/* Services Dropdown */}
        <Button
          aria-controls={open ? 'services-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
        >
          Services
        </Button>
        <Menu
          id="services-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'services-button',
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/webdevelopment">Web Development</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/seo">SEO</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/graphicdesign">Graphic Design</MenuItem>
        </Menu>

        <Button component={Link} to="/contact" color="inherit" sx={{ mr: 2 }}>
          Contact
        </Button>
        <Button component={Link} to="/blog" color="inherit" sx={{ mr: 2 }}>
          Blog
        </Button>
        <Button component={Link} to="/about" color="inherit" sx={{ mr: 2 }}>
          About Us
        </Button>
        <Button component={Link} to="/writeforus" color="inherit" sx={{ mr: 2 }}>
          Write For Us
        </Button>
        
        {/* Get a Quote Button */}
        <Button variant="contained" style={{ backgroundColor: "#4A7766", color: "#fff" }}>
          Get a Quote
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

