import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";
import img1 from "./img/city.jpg";
import City from "./components/City";

function App() {
  const [page, setPage] = useState(false)

  function see() {
    setPage(true)
  }
  
  return (
    <>
    {!page ? (
       <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(30, 38%, 92%)",
        minWidth: "100vw",
        height: "100vh",
      }}>
        <Stack 
        sx={{
            
          }}> 
      <Card sx={{ maxWidth: { xs: 345, sm: 500 } }}>
        <CardMedia
          component="img" 
          height="250"
          image={img1}
          backgroundSize="cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          New York
          </Typography>
          <Typography variant="body2" color="text.secondary">
          New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square.
          </Typography>
        </CardContent>
        <CardActions sx={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Button size="small" onClick={see}>Plus de photos</Button>
        </CardActions>
      </Card>
  
        </Stack>
      </Box>
    ): <City retour={setPage}/> }
   
    </>
  );
}

export default App;
