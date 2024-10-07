import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IconButton, Typography } from "@mui/material";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../components/Icons";

import { useState } from "react";

export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
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

