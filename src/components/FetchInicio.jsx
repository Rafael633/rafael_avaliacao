import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function FetchInicio() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://gerandoempreendedores.com.br/wp-content/uploads/2020/05/mercado-livre.jpg)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="sm">
            <Typography variant="h1" component="h1" gutterBottom>
          ** História **
            </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Mercado Livre é uma empresa argentina de tecnologia que oferece soluções de comércio eletrônico, '}
            {'para que pessoas e empresas possam comprar, vender, pagar, anunciar e enviar produtos por meio da internet.'}
            {'Opera em 18 países, tem cerca de 30 mil funcionários e é o site de e-commerce mais popular da América Latina em número de visitantes. '}
            {'A empresa mantém operações na Argentina, Bolívia, Brasil, Chile, Colômbia, Costa Rica, Equador, El Salvador, Guatemala, Honduras, México, Nicarágua, Panamá, Paraguai, Peru, República Dominicana, Uruguai e Venezuela.'}
          </Typography>
          </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}