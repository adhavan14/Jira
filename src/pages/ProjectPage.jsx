import {MenuItem, Select, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchListOfCards, fetchListOfProjects} from "../services/JiraService.jsx";

const ProjectPage = () => {

    const [projects, setProjects] = useState([])
    const [project, setProject] = useState("")
    const [cards, setCards] = useState([])

    const getProjects = async () => {
        const response = await fetchListOfProjects()
        setProjects(response)
    }

    const handleProject = (event) => {
        setProject(event.target.value)
    }

    useEffect(() => {
        getProjects()
    }, []);

    const getCards = async () => {
        const response = await fetchListOfCards(project)
        setCards(response)
    }

    useEffect(() => {
        project && getCards()
    }, [project]);

    return (
        <div>
            <Typography>Hello Jira</Typography>
            <Select sx={{width:'200px'}}
                    value={project}
                    onChange={handleProject}
            >
                {
                    projects && projects.map((project) => {
                        return <MenuItem key={project.id} value={project.name}>{project.name}</MenuItem>
                    })
                }
            </Select>
            {
                cards.issues && cards.issues.map((issue) => {
                    return <div key={issue.id}>
                            <Typography>{issue.key}</Typography>
                        <Typography>{issue.fields.status.name}</Typography>
                        <Typography>{issue.fields.summary}</Typography>
                    </div>
                })
            }
        </div>
    )
}

export default ProjectPage;