import { createTheme } from '@mui/material/styles';
import { mainColor, mainColorText, secondaryColor} from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: mainColor,
      contrastText: mainColorText
    },
    text: {
        primary: secondaryColor
    }
  },
});

export default theme