import React, { useState } from 'react'
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
    makeStyles,
    withStyles,
    Avatar,
    Divider
} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import {Navbar} from "./Navbar"
import Particles from "react-particles-js"
import { animateScroll as scroll} from "react-scroll";
import { useForm } from "react-hook-form";
import { LeakAddOutlined } from '@material-ui/icons'
import mail from "./assets/Mailbox-pana.png"
import aboutme from "./assets/aboutme.png"
const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color:"tomato",
        },
        "& label":{
            color:"tomato",
            fontFamily:"san-serif"
        },
        "& input":{
            color:"tan",
            fontFamily:"san-serif"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&.Mui-focused fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor:"tomato"
            }
        }
    },

    
})(TextField)

const useStyles = makeStyles(theme =>({
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tan",
        marginBottom:"1rem",
        "&:hover":{
            borderColor:"tomato"
        }
    },
    title:{
        display:"flex", 
        justifyContent:"center",
        color:"tomato",
        textTransform:"uppercase",
        padding:"2rem 0",

    },
    letra:{
        fontFamily:"Georgia, 'Times New Roman', Times, serif"
    },
    img2:{
        position:"absolute",
         left:"40px",
        bottom:"91.2px",
        opacity:0.5
    },
    container :{
        position:"relative",
        height:"100%",
        backgroundColor:"#333"
    
    },

    form:{
        textAlign:"center"
    },

    particles :{
        position:"absolute",
        opacity:1,
    }
}))

export const Contact = ({idioma}) => {

const classes = useStyles()
const { register, handleSubmit, errors } = useForm();

const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

const onSubmit = (data,r) => {
    console.log(data.email)
    alert(`Thank you for your message from ${data.email}`);
    const templateId = 'template_24wsxw6';
    const serviceID = 'my_gmail';
    sendFeedback(serviceID, templateId, { from_name: data.name, message: data.comment, reply_to: data.email })
    r.target.reset();
}
return (

   
        <Box component="div" id="contact" className={classes.container}>
            {
                idioma ?
                <Grid container justify="center" align="center">
                
                    <Box component="div" className={classes.container}>
        <Box className={classes.img2} component="div">
                        <Avatar style={{height:"170px", width:"170px",}} src={mail}></Avatar>
                        </Box>
                        <Box component="div" className={classes.title}>
                         <Typography data-aos="fade-up" variant="h5" align="center">
                         Contact Me
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
                    <Box onSubmit={handleSubmit(onSubmit)} component="form"className={classes.form}>
                        
                        <InputField 
                            fullWidth={true} 
                            label="name" 
                            name="name" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                            inputRef={
                                register({ 
                                    required: "Please enter your name", 
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    } 
                                })
                            }    />
                          {errors.name && errors.name.message}
                            <br />
                        <InputField fullWidth={true} 
                            label="email" 
                            name="email" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                                inputRef={
                                    register({
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })
                        } />
                        {errors.email && errors.email.message}
                            <br />
                        <InputField fullWidth={true} 
                            label="comment" 
                            name="comment" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                            inputRef={
                                register({
                                    required: true
                                })
                            } 
                     />
                        <br />
                        <Button 
                        type="sumbit" 
                        variant="outlined" 
                        fullWidth={true} 
                        endIcon={<SendIcon/>} 
                        className={classes.button} >
                            Send
                        </Button>
                        </Box>
                    </Box>
                </Grid>
                :

              
                    <Grid container justify="center" align="center">
            
                    <Box component="div" className={classes.container}>
                    <Box className={classes.img2} component="div">
                        <Avatar style={{height:"170px", width:"170px",}} src={mail}></Avatar>
                    </Box>
                    <Box component="div" className={classes.title}>
                         <Typography  variant="h5" align="center" className={classes.letra}>
                         Contacto
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
                    
                    <Box onSubmit={handleSubmit(onSubmit)} component="form"className={classes.form}>
                        
                        <InputField 
                            fullWidth={true} 
                            label="nombre" 
                            name="name" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                            inputRef={
                                register({ 
                                    required: "Please enter your name", 
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    } 
                                })
                            }    />
                          {errors.name && errors.name.message}
                            <br />
                        <InputField fullWidth={true} 
                            label="email" 
                            name="email" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                                inputRef={
                                    register({
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })
                        } />
                        {errors.email && errors.email.message}
                            <br />
                        <InputField fullWidth={true} 
                            label="asunto" 
                            name="comment" 
                            variant="outlined" 
                            margin="dense" 
                            size="medium" 
                            inputRef={
                                register({
                                    required: true
                                })
                            } 
                     />
                        <br />
                        <Button 
                        type="sumbit" 
                        variant="outlined" 
                        fullWidth={true} 
                        endIcon={<SendIcon/>} 
                        className={classes.button} >
                            Enviar
                        </Button>
                        </Box>
                    </Box>
                </Grid>
            }

    
            
        </Box>
)
}