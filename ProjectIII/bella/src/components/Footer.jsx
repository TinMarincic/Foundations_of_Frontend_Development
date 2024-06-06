import './footer.css';
import { useTheme } from '@mui/material/styles';


function Footer(){
    const theme = useTheme();
    return(
        <div className="footer-container">
        <footer>
            <p style={{ color: theme.palette.secondary.dark }}>&copy; Bella 2024 </p>
        </footer>
        </div>

    );

}



export default Footer;