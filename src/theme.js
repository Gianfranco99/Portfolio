import {createMuiTheme} from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"

 const theme = createMuiTheme({
    palette:{
        primary: purple
    },
    img:{
        objectFit:"fill"
    }
})

export default theme