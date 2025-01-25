
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const StorySelect = ({handleStoryChange, story, stories}) => {

    return (
        <FormControl sx={{width: '200px'}}>
            <InputLabel id="story-label" sx={{
                "&.Mui-focused": {
                    color: '#7b7d7d',
                }
            }}>Story</InputLabel>
            <Select sx={{
                borderRadius:'10px',
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#7b7d7d'
                }
            }}
                    value={story}
                    onChange={handleStoryChange}
                    label={"Story"}
                    labelId={"story-label"}
            >
                {
                    stories && stories.issues && stories.issues.map((story) => {
                        return <MenuItem key={story.id} value={story.id}>{story.key}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}
export default StorySelect