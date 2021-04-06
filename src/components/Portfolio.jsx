import React,{useEffect} from 'react'
import {
    Typography,
    Card,
    CardActionArea,
    Box,
    Grid,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    makeStyles,
    Divider
} from '@material-ui/core'
import { Navbar } from './Navbar'
import project from "./assets/javascript.jpg"
import CLIMA from "./assets/ClimaAPi.png"
import inro from "./assets/inro.jpg"
import MOVIE from "./assets/MovieApi.png"
import ECOMMERCE from "./assets/FotoEcommerce.png"
import Particles from "react-particles-js"
import Aos from "aos";
import "aos/dist/aos.css"
const useStyles=makeStyles(theme =>({

    mainContainer:{
        height:"%100",
        position:"relative"
    },
    title:{
        display:"flex", 
        justifyContent:"center",
        color:"tomato",
        paddingTop:"6rem",
        textTransform:"uppercase"
    },
    letter:{
        fontFamily:"Georgia, 'Times New Roman', Times, serif"
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto",
    },
    contentCard:{
        backgroundColor:"#333"
    },
    particles :{
        position:"absolute",
        opacity:1,
    }
}))

export const Portfolio = ({idioma}) => {
    useEffect(()=>{
        Aos.init({ duration:2000})
    },[])
    const classes=useStyles()

    return (
        
        <Box component="div" id="portfolio" className={classes.mainContainer}>
        <Particles canvasClassName={classes.particles}
                    params={{
                        particles:{
                         number:{
                            value:55,
                                }
                             }
                        }}
            />
     <Box component="div"className={classes.title}>
         {
             idioma ? 
             <Typography data-aos="fade-up" variant="h4" align="center"className={classes.letter}>
                PORTFOLIO
                    <Divider style={{backgroundColor:"tomato"}}/>
            </Typography>
            :
            <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                PORTAFOLIO
                    <Divider style={{backgroundColor:"tomato"}}/>
            </Typography>
         }
                         
    </Box>
        
            {
                idioma 
                ?
                <Grid container justify="center" align="center" >
       
        <Grid item xs={12} sm={6} md={6} >
        <Card data-aos="fade-up" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="170" image={CLIMA}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                        Weather api
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p"  style={{color:"tan"}}>
                    Project made with React.
                     Which is combined with a weather api that shows the information of different countries.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://gianfranco99.github.io/Proyecto-Api/">
                        See
                    </Button>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/Proyecto-Api">
                    GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
        <Card data-aos="fade-up" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="165" image={ECOMMERCE}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                       Nuts Store
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p"  style={{color:"tan"}}>
                    E-commerce carried out in Henry's bootcamp, is carried out with the PERN paradigm and agile methodologies such as SCRUM.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/E-COMMERCE-NutsStore">
                    GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Card  data-aos="fade-down" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="165" image={inro}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                    INRO
                    </Typography>
                    <Typography variant="body1" style={{color:"tan"}} component="p">
                    Project made with React Native and MongoDB.
                     It consists of a virtual wallet with multiple functionalities
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/danieltkach/henry-bank">
                        GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Card  data-aos="fade-down" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="165" image={MOVIE}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                        Movie Api
                    </Typography>
                    <Typography variant="body1" style={{color:"tan"}} component="p">
                    Project made with React and Redux.
                     It is used to see all the information of different series, movies or video games.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://gianfranco99.github.io/Movie-Api/">
                        Ver
                    </Button>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/Movie-Api">
                        GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
       
        </Grid>
                :

                <Grid container justify="center" align="center" >
       
        <Grid item xs={12} sm={6} md={6} >
        <Card data-aos="fade-up" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="170" image={CLIMA}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                        Api del Clima
                    </Typography>
                    <Typography variant="body1" component="p" style={{color:"tan"}}>
                    Proyecto realizado con React.
                    El cual se combina con una api del clima que muestra la informacion de distintos paises.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://gianfranco99.github.io/Proyecto-Api/">
                        Ver
                    </Button>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/Proyecto-Api">
                    GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
        <Card data-aos="fade-up" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="165" image={ECOMMERCE}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                        Nuts Store
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p"  style={{color:"tan"}}>
                    E-commerce realizado en el bootcamp de Henry, esta realizado con el paradigma PERN y metodologias agiles como SCRUM.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/E-COMMERCE-NutsStore">
                    GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
        <Card data-aos="fade-up" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="175" image={inro}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}}>
                        INRO
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p"  style={{color:"tan"}}>
                    Proyecto realizado con React Native y MongoDB.
                    Consiste en una billetera virtual con multiples funcionalidades.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                <Button size="small" style={{color:"tomato"}} href="https://github.com/danieltkach/henry-bank">
                        GitHub
                </Button>
                </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Card  data-aos="fade-down" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img" alt="project 1" height="165" image={MOVIE}/>
                <CardContent className={classes.contentCard}>
                    <Typography gutterBottom variant="h5" style={{color:"tomato"}} >
                        Api de Peliculas
                    </Typography>
                    <Typography variant="body1" component="p" style={{color:"tan"}}>
                    Proyecto realizado con React y Redux.
                    Sirve para ver toda la informacion de diferentes series,peliculas o videojuegos.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider style={{backgroundColor:"tan"}}/>
                <CardActions className={classes.contentCard}>
                    <Button size="small" style={{color:"tomato"}} href="https://gianfranco99.github.io/Movie-Api/" >
                        Ver
                    </Button>
                    <Button size="small" style={{color:"tomato"}} href="https://github.com/Gianfranco99/Movie-Api">
                        GitHub
                    </Button>
                </CardActions>
        </Card>
        </Grid>

       
        </Grid>
            }

       
        </Box>
    )
}
