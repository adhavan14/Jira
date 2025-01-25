import { Button, Typography } from "@mui/material"
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

const GenerateButton = ({handleSummary}) => {

    return (
        <Button variant="contained" 
            onClick={handleSummary}
            sx={{color:'black', backgroundColor:'#cedcf7',padding: '12px 24px', borderRadius:'10px', boxShadow:'none', textTransform: 'none'}}>
            <SummarizeOutlinedIcon></SummarizeOutlinedIcon>
            <Typography sx={{fontSize:'16px', fontFamily:'serif', marginLeft:'5px'}}>Generate</Typography>
        </Button>
    )
}

export default GenerateButton