import { Button } from "@mui/material";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { IconContainer } from "../HomePage.style"

const SummaryActions = ({generatePdf, handleStarred, isStarred}) => {

    return (
        <IconContainer>
            <Button sx={{minWidth:'40px', borderRadius:'10px', color:'#004add'}} onClick={handleStarred}>
                {isStarred ? <StarOutlinedIcon></StarOutlinedIcon> :<StarBorderOutlinedIcon></StarBorderOutlinedIcon>}
            </Button>
            <Button sx={{minWidth:'40px', borderRadius:'10px', color:'#004add'}} onClick={generatePdf}>
                <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>
            </Button>
            <Button sx={{minWidth:'40px', borderRadius:'10px', color:'#004add'}}>
                <ContentCopyOutlinedIcon></ContentCopyOutlinedIcon>
            </Button>
        </IconContainer>
    )
}

export default SummaryActions