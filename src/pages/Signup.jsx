import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import { Carousel } from 'react-responsive-carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import banner from '../assets/banner.jpeg'
import logo from '../assets/image.png'
import logoDark from '../assets/image-dark.png'
import Hidden from '@mui/material/Hidden';
import LockIcon from '@mui/icons-material/LockOutlined'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Esqueceu sua senha ? '}
            <Link color="#2196f3" href="https://mui.com/">
                Recuperar senha
            </Link>{' '}
        </Typography>
    );
}


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0761E2',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0761E2',
        },
        secondary: {
            main: '#e91e63',
        },
        background: {
            default: '#232323',
        },
    },
});


export default function SignInSide() {

    const items = [
        { title: 'Plataforma de cursos completa', description: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum' },
        { title: 'Plataforma de cursos completa', description: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum' },
        { title: 'Plataforma de cursos completa', description: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum' },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        console.log({ email, password });

        // Define your API endpoint
        const apiEndpoint = 'http://localhost:3005/login';

        try {
            // Make a POST request to the login endpoint
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            // Parse the JSON response
            const responseData = await response.json();

            // Check the response status
            if (response.ok) {
                toast.success('Logado com sucesso!');
            } else if (response.status === 401) {
                toast.error('Email ou senha inválidos');
            } else {
                toast.warn('Something Wrong');
            }
        } catch (error) {
            console.error('Network error:', error);
            toast.error('Network error');
        }
    };

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

    React.useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedDarkMode !== null) {
            setDarkMode(savedDarkMode);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const hidden = useMediaQuery(theme => lightTheme.breakpoints.up('sm'));

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <ToastContainer />
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <Box sx={{ position: 'absolute', top: 2, right: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <IconButton sx={{ color: 'white', m: 4 }}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton onClick={handleThemeChange} sx={{ color: 'white', m: 4 }}>
                            {darkMode ? <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                                <g clip-path="url(#clip0_2284_197)">
                                    <path d="M29.8008 28.1094C30.082 28.1094 30.293 28.4609 30.082 28.7422C28.6055 30.5352 26.3906 31.625 23.9648 31.625C19.6406 31.625 16.125 28.1094 16.125 23.75C16.125 19.4258 19.6406 15.875 24 15.875C24.4219 15.875 25.0547 15.9453 25.4414 16.0156C25.793 16.0859 25.8633 16.543 25.5469 16.7188C23.6133 17.8086 22.4531 19.8477 22.4531 22.0625C22.4531 25.543 25.2305 28.25 28.5703 28.25C28.957 28.25 29.3438 28.2148 29.7305 28.1445C29.7656 28.1094 29.7656 28.1094 29.8008 28.1094ZM23.9648 29.9375C24.7383 29.9375 25.4766 29.832 26.1797 29.5508C23.0156 28.5312 20.7305 25.5781 20.7305 22.0625C20.7305 20.5859 21.1523 19.1445 21.8906 17.9492C19.5 18.793 17.8125 21.0781 17.8125 23.75C17.8125 27.1602 20.5547 29.9375 23.9648 29.9375Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2284_197">
                                        <rect x="7" y="3.5" width="34" height="41" rx="17" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                : <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                                    <g clip-path="url(#clip0_2284_229)">
                                        <path d="M16.125 23.75C16.125 19.4258 19.6406 15.875 23.9648 15.875C24.3867 15.875 25.0195 15.9453 25.4062 16.0156C25.7578 16.0859 25.8281 16.543 25.5117 16.7188C23.6133 17.8086 22.418 19.8477 22.418 22.0625C22.418 25.9297 25.8984 28.8477 29.7305 28.1445C30.082 28.0742 30.293 28.4609 30.082 28.7422C28.6055 30.5352 26.3906 31.625 23.9648 31.625C19.6406 31.625 16.125 28.1094 16.125 23.75Z" fill="#020A09" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2284_229">
                                            <rect x="7" y="3.5" width="34" height="41" rx="17" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                        </IconButton>
                    </Box>


                    {hidden && (
                        <div className="container">
                            <Button variant="contained" color="primary" sx={{ width: '78px', height: '32px', borderRadius: '8px' }}>
                                Cursos
                            </Button>
                            <Carousel
                                autoPlay={true}
                                showStatus={false}
                                interval={3000}
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    <div style={{ position: 'absolute', bottom: '10px', right: '80px' }}>
                                        <button type="button" onClick={onClickHandler} title={label} style={{ background: 'none', border: 'none', outline: 'none', boxShadow: 'none', marginRight: '10px', cursor: 'pointer', display: 'flex', padding: '20px' }}>
                                            <ArrowBackIosIcon style={{ fontSize: '3rem', color: hasPrev ? 'white' : 'grey' }} />
                                        </button>
                                    </div>
                                }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        <button type="button" onClick={onClickHandler} title={label} style={{ background: 'none', border: 'none', outline: 'none', boxShadow: 'none', cursor: 'pointer', display: 'flex', padding: '20px' }}>
                                            <ArrowForwardIosIcon style={{ fontSize: '3rem', color: hasNext ? 'white' : 'grey' }} />
                                        </button>
                                    </div>
                                }
                                renderIndicator={(onClickHandler, isSelected, index, label) => {
                                    if (isSelected) {
                                        return (
                                            <li style={{ display: 'inline-block', background: '#FFFFFF', width: '128px', height: '6px', marginRight: '10px', marginTop: '32px' }} aria-label={`Selected: ${label} ${index + 1}`} title={`Selected: ${label} ${index + 1}`} />
                                        );
                                    }
                                    return (
                                        <li style={{ display: 'inline-block', background: '#222222', width: '128px', height: '6px', marginRight: '10px', marginTop: '32px' }} onClick={onClickHandler} onKeyDown={onClickHandler} value={index} key={index} role="button" tabIndex={0} title={`${label} ${index + 1}`} aria-label={`${label} ${index + 1}`} />
                                    );
                                }}
                            >
                                {items.map((item, i) => (
                                    <div key={i} style={{ textAlign: 'left' }}>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </Grid>
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
                        <Grid container justifyContent="space-between" alignItems="center" m={4}>
                            <Grid item>
                                <img src={darkMode ? logoDark : logo} alt="Logo" height={'31px'} />
                            </Grid>
                            <Grid item>
                                <Link href="/create-account" color="#2196f3" variant="body2" sx={{ '&:hover': { color: '#009dbf' }, fontSize: { xs: '18px' } }}>
                                    Criar conta
                                </Link>
                            </Grid>
                        </Grid>
                        <Box sx={{ width: '100%', mb: 4 }}>
                            <Typography component="h1" variant="h1" sx={{ fontSize: '2rem', mb: 1, font: 'Inter', fontWeight: '600' }} align="left">
                                Boas-Vindas!
                            </Typography>

                            <Typography component="h5" variant="h5" sx={{ fontSize: '0.8rem', mb: 1 }} align="left">
                                Entre utilizando uma das opções abaixo
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <IconButton sx={{ bgcolor: '#f9f9f9', border: '1px solid #151515', color: '#000000', m: 1, borderRadius: 8, width: { xs: '32%', sm: '150px', borderRadius: 6 }, '&:hover': { borderColor: '#1976d2', color: '#1976d2', bgcolor: '#f9f9f9' } }}><svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0714 24.2857H11.9286C10.9818 24.2857 10.2143 23.5182 10.2143 22.5714V11.4286C10.2143 10.4818 10.9818 9.71428 11.9286 9.71428H23.0714C24.0182 9.71428 24.7857 10.4818 24.7857 11.4286V22.5714C24.7857 23.5182 24.0182 24.2857 23.0714 24.2857ZM11.9286 26C10.035 26 8.5 24.465 8.5 22.5714V11.4286C8.5 9.53502 10.035 8 11.9286 8H23.0714C24.965 8 26.5 9.53502 26.5 11.4286V22.5714C26.5 24.465 24.965 26 23.0714 26H11.9286Z" fill="#0E0E0E" />
                                <path d="M18.0446 15.4744C18.0446 15.5849 18.1342 15.6744 18.2446 15.6744H19.9189C20.0747 15.6744 20.1707 15.8447 20.09 15.978L17.6144 20.0685C17.5337 20.2018 17.6297 20.3721 17.7855 20.3721H22.9452C23.0556 20.3721 23.1452 20.2826 23.1452 20.1721V18.8512C23.1452 18.7407 23.0556 18.6512 22.9452 18.6512H21.0164C20.8605 18.6512 20.7646 18.4806 20.8455 18.3474L23.3857 14.1643C23.4666 14.031 23.3707 13.8605 23.2148 13.8605H18.2446C18.1342 13.8605 18.0446 13.95 18.0446 14.0605V15.4744Z" fill="#0E0E0E" />
                                <path d="M11.5693 15.4744C11.5693 15.5849 11.6589 15.6744 11.7693 15.6744H13.2598C13.3703 15.6744 13.4598 15.764 13.4598 15.8744V20.1721C13.4598 20.2826 13.5494 20.3721 13.6598 20.3721H15.3393C15.4498 20.3721 15.5393 20.2826 15.5393 20.1721V15.8744C15.5393 15.764 15.6289 15.6744 15.7393 15.6744H17.2298C17.3403 15.6744 17.4298 15.5849 17.4298 15.4744V14.0605C17.4298 13.95 17.3403 13.8605 17.2298 13.8605H11.7693C11.6589 13.8605 11.5693 13.95 11.5693 14.0605V15.4744Z" fill="#0E0E0E" />
                            </svg>
                            </IconButton>
                            <IconButton sx={{ bgcolor: '#f9f9f9', border: '1px solid #151515', color: '#000000', m: 1, borderRadius: 8, width: { xs: '32%', sm: '150px', borderRadius: 6 }, '&:hover': { borderColor: '#1976d2', color: '#1976d2', bgcolor: '#f9f9f9' } }}><FacebookIcon color="inherit" /></IconButton>
                            <IconButton sx={{ bgcolor: '#f9f9f9', border: '1px solid #151515', color: '#000000', m: 1, borderRadius: 8, width: { xs: '32%', sm: '150px', borderRadius: 6 }, '&:hover': { borderColor: '#1976d2', color: '#1976d2', bgcolor: '#f9f9f9' } }}><TwitterIcon color="inherit" /></IconButton>
                            <IconButton sx={{ bgcolor: '#f9f9f9', border: '1px solid #151515', color: '#000000', m: 1, borderRadius: 8, width: { xs: '32%', sm: '150px', borderRadius: 6 }, '&:hover': { borderColor: '#1976d2', color: '#1976d2', bgcolor: '#f9f9f9' } }}><AppleIcon color="inherit" /></IconButton>
                        </Box>
                        {hidden && (
                            <Typography component="h1" variant="h6" sx={{ fontSize: '1rem' }}>
                                ou
                            </Typography>
                        )}
                        {!hidden && (
                            <Typography component="h1" variant="h6" sx={{ fontSize: '1.5rem', my: 2 }}>
                                ou
                            </Typography>
                        )}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 /* Adjust this value as needed */ }}>
                            <Typography component="h1" variant="h6" sx={{ fontSize: '0.8rem' }}>
                                Usuário
                            </Typography>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{ borderRadius: '8px', mb: 3, height: '48px', textAlign: 'left' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography component="h1" variant="h6" sx={{ fontSize: '0.8rem' }}>
                                Senha
                            </Typography>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{ borderRadius: '8px' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" sx={{ '&:hover': { color: '#009dbf' } }} />}
                                label="Manter conectado"
                                sx={{ mt: 2 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, '&:hover': { backgroundColor: '#009dbf' } }}
                            >
                                Entrar
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}