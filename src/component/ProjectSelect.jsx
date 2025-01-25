import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProjectSelect = ({projects, project, handleProject}) => {

    return (
        <FormControl sx={{width: '200px'}}>
            <InputLabel id="project-label" sx={{
                "&.Mui-focused": {
                    color: '#7b7d7d',
                }
            }}>Project</InputLabel>
            <Select sx={{
                borderRadius:'10px',
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#7b7d7d'
                }
            }}
                    value={project}
                    label={"Project"}
                    labelId={"project-label"}
                    onChange={handleProject}
            >
                {
                    projects && projects.map((project) => {
                        return <MenuItem key={project.id} value={project.name}>{project.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default ProjectSelect;