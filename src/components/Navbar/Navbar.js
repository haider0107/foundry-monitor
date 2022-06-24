import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["About Us", "Services", "Live Tracking"];
const url = ["about-us", "services", "live-tracking"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [cookie, setCookie] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getCookie = () => {
    const name = "industrial=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    setCookie(res);
  };

  React.useEffect(() => {
    getCookie();
  }, []);

  const logout = () => {
    document.cookie =
      "industrial=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              my: 2,
              color: "white",
              display: "block",
              textDecoration: "None",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Industrial Monitoring
            </Typography>
          </Link>

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
              {pages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={url[i]}
                    style={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textDecoration: "None",
                    }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link
                to={url[i]}
                style={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "None",
                  marginRight: "2%",
                  marginLeft: "2%",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {cookie ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  to="my-account"
                  style={{
                    my: 2,
                    width: "fit-content",
                    color: "white",
                    display: "block",
                    textDecoration: "None",
                    marginRight: "2%",
                    marginLeft: "2%",
                  }}
                >
                  My Account
                </Link>
                <Link
                  to="temp-monitoring"
                  style={{
                    my: 2,
                    width: "fit-content",
                    color: "white",
                    display: "block",
                    textDecoration: "None",
                    marginRight: "2%",
                    marginLeft: "2%",
                  }}
                >
                  Temprature Monitoring
                </Link>
                <Typography
                  textAlign="center"
                  style={{
                    marginLeft: "15px",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                  onClick={logout}
                >
                  Log Out
                </Typography>
              </div>
            ) : (
              <Link
                to="login"
                style={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "None",
                }}
              >
                Login
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
