import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loader = ()=>{
    return(
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size={20} style={{color:"white"}}/>
        </Box>
    )
}

export default Loader