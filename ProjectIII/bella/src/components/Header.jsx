import * as React from "react";
import { Link } from "react-router-dom";
import './header.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="Appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 800,
              color: "white",
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Bella
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/" style={{ fontSize: "1.1rem" }}>Bella</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/about_us" style={{ fontSize: "1.1rem" }}>About us</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/services" style={{ fontSize: "1.1rem" }}>Services</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/contact" style={{ fontSize: "1.1rem" }}>Contact</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Playfair Display",
              fontWeight: 800,
              color: "white",
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Bella
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 'auto' }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1.05rem" }}>
                Bella
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/about_us" style={{ color: "white", textDecoration: "none", fontSize: "1.05rem" }}>
                About us
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/services" style={{ color: "white", textDecoration: "none", fontSize: "1.05rem" }}>
                Services
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "1.05rem" }}>
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
