import { createMuiTheme } from '@material-ui/core/styles';
import { TextField, withStyles } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' }, 
    secondary: { main: '#FFFFFF' },
  },

}) 

export const CssTextField = withStyles({
  root: {
    '& label': {
      color: '#fff',
    },
    '& input': {
      color: '#fff'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff'
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff'
      },
    },
  },
})(TextField);