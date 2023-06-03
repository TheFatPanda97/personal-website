import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d67754',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // color: 'white',
          // '--TextField-brandBorderColor': '#E0E3E7',
          // '--TextField-brandBorderHoverColor': '#B2BAC2',
          // '--TextField-brandBorderFocusedColor': '#6F7E8C',
          // '& label.Mui-focused': {
          //   color: 'var(--TextField-brandBorderFocusedColor)',
          // },
        },
      },
    },
  },
});

function CustomApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<CustomApp />);
