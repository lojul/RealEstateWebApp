import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddForm from '../components/AddForm';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function AgentHome() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <HomeWorkIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap sx={{ marginRight: "5px" }}>

                        <Link href="./" underline="none" color="white">
                            {'Agents'}
                        </Link>
                    </Typography>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link href="./Customer" underline="none" color="white">
                            {'Customers'}
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Real Estate
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            If you are a landlord or agent looking for a place to advertise your property
                            this is the right place for you. Wait no more & join with us!
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Register</Button>
                            <Button variant="outlined">Sign in</Button>
                        </Stack>
                    </Container>
                </Box>
                <hr></hr>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <AddForm />
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}