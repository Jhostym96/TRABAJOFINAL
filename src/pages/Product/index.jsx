import {
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { height } from "@mui/system";
import StandardImageList from "../../components/StandardImageList";
import StartsRating from "../../components/StartsRating";

const Products = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          {/* Image CARD */}
          <Card style={{ borderRadius: 30 }}>
            <CardMedia
              component="img"
              sx={{ width: 1, height: 300, boxShadow: 1 }}
              image="https://estaticos-cdn.sport.es/clip/6bf394de-f62a-48a1-a5e7-626ad1933abd_alta-libre-aspect-ratio_default_0.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card style={{ padding: 10 }}>
            <StandardImageList />
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card style={{ padding: 10 }}>
            <Typography variant="h4">
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  maxHeight: { xs: 1, md: 1 },
                  maxWidth: { xs: 1, md: 1 },
                }}
                alt="The house from the offer."
                src="https://assets.stickpng.com/images/584a9b47b080d7616d298778.png"
              ></Box>
              Estadio Santiago Bernabeu⚽
            </Typography>
            <Typography>
              Propio de : <span>Real Madrid</span>{" "}
            </Typography>
            {/* Calificacion de Estrellas */}
            <StartsRating />
            <Typography mt={2} variant="h5">
              Descripcion
            </Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              cum quidem saepe, quo tenetur praesentium ratione assumenda et
              exercitationem nostrum rem suscipit ab expedita, eum repellendus.
              Eum eos placeat molestias.quidem saepe, quo tenetur praesentium
              ratione assumenda et exercitationem nostrum rem suscipit ab
              expedita, eum repellendus. Eum eos placeat molestias.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
