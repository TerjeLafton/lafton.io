import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const ThemeContextProvider = ({ children }) => {
    const muiTheme = createMuiTheme({
        palette: {
            background: {
                default: '#252525',
                primary: '#252525',
                secondary: '#64dfdf',
            },
            primary: {
                main: '#64dfdf',
            },
            secondary: {
                main: '#252525',
            },
        },
    });

    return (
        <ThemeProvider theme={ muiTheme }>
            { children }
        </ThemeProvider>
    )
}

export default ThemeContextProvider