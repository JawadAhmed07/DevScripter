import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#4A7766", color: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6tzwkSJr3mPy9yIuMQcpjV7AI-O7z8hXSA&s"
                alt="Logo"
                style={{ width: 40, height: 40 }}
              />
              <Typography variant="h6" ml={2}>
                DevScripters
              </Typography>
            </Box>
            <Typography variant="body2" color="gray.300">
              Air plant banjo lyft occupy retro adaptogen indego
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" display="block" gutterBottom>
                Home
              </Link>
              <Link href="/about" color="inherit" display="block" gutterBottom>
                About Us
              </Link>
              <Link href="/contact" color="inherit" display="block" gutterBottom>
                Contact Us
              </Link>
              <Link href="/writeforus" color="inherit" display="block" gutterBottom>
                Write For Us
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Our Services
            </Typography>
            <Box>
              <Link href="/webdevelopment" color="inherit" display="block" gutterBottom>
                Web Development
              </Link>
              <Link href="/seo" color="inherit" display="block" gutterBottom>
                SEO
              </Link>
              <Link href="/graphicdesign" color="inherit" display="block" gutterBottom>
                Graphic Designing
              </Link>
              <Link href="/blog" color="inherit" display="block" gutterBottom>
                Blog
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box mt={4} pt={4} sx={{ borderTop: "1px solid #ffffff33", textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="gray.300">
            © 2024 DEVSCRIPTERS —
            <Link href="https://twitter.com/knyttneve" color="inherit" target="_blank" rel="noopener noreferrer">
              @devscripters
            </Link>
          </Typography>
          <Box mt={2}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
