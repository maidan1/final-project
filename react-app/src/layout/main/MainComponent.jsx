import { Container } from "@mui/material";

const MainComponent = ({ children }) => {
  return (
    <Container sx={{ mt: 20, minHeight: "65vh", marginBottom: "7%" }}>
      {children}
    </Container>
  );
};

export default MainComponent;
