import { Slider, Stack, Typography } from "@mui/material";

const WordLengthSlider = ({handleWordLength}) => {

    return (
        <Stack spacing={1} sx={{width:'30%', fontSize:'20px', fontFamily:'serif', alignItems:'center'}}>
            <Typography>Word Length</Typography>
            <Slider
                aria-label="Temperature"
                defaultValue={50}
                onChange={handleWordLength}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={50}
                marks
                min={50}
                max={300}
                sx={{color:'#8cb1fa'}}
            />
        </Stack>
    )
}

export default WordLengthSlider;