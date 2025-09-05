// src/scenes/login/index.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Medical-themed carousel images
const carouselImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80", // Doctor with mask
  "https://images.unsplash.com/photo-1588776814546-3a7c9f1d4b8b?w=1200&auto=format&fit=crop&q=80", // MRI scanner
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=80", // Hospital ward
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80", // ICU / ventilator
];
<Typography variant="h4" fontWeight="bold">
             Janitri
            </Typography>

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const validEmail = "Admin@crm.com";
    const validPassword = "1234";

    if (email.trim() === validEmail && password.trim() === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {/* LEFT SIDE: Carousel */}
      {!isMobile && (
        <Box
          sx={{
            flex: 6, // 60% of width
            position: "relative",
            backgroundImage: `url(${carouselImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
          }}
        >
          {/* Branding */}
          <Box
            sx={{
              position: "absolute",
              top: 40,
              left: 40,
              color: "#0c0c0cff",
              textShadow: "1px 1px 4px rgba(255, 255, 255, 0.7)",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
             Janitri MedDevice CRM
            </Typography>
            <Typography variant="h6" fontWeight="300">
              Trusted by Leading Healthcare Providers
            </Typography>
          </Box>

          {/* Dots */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1,
            }}
          >
            {carouselImages.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: idx === currentImageIndex ? 16 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor:
                    idx === currentImageIndex ? "primary.light" : "grey.500",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* RIGHT SIDE: Login Form */}
      <Box
        sx={{
          flex: 4, // 40% of width
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000ff",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 380, px: 3 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            align="center"
            fontWeight="600"
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body1"
            align="center"
            mb={3}
            color="text.secondary"
          >
            Sign in to your account
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              autoFocus
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>

          {/* Demo credentials */}
          <Typography variant="body2" align="center" color="text.secondary">
            Demo: <b>Admin@crm.com</b> / <b>1234</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
