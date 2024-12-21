import {MenuItem, Select, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {fetchDevelopmentDetails, fetchListOfCards, fetchListOfProjects} from "../services/JiraService.jsx";

const ProjectPage = () => {

    const [projects, setProjects] = useState([])
    const [project, setProject] = useState("")
    const [cards, setCards] = useState([])
    const [card, setCard] = useState("")
    const [developmentDetails, setDevelopmentDetails] = useState({})

    const getProjects = async () => {
        const response = await fetchListOfProjects()
        setProjects(response)
    }

    const handleProject = (event) => {
        setProject(event.target.value)
    }

    const handleCard = (event) => {
        console.log(event.target.value)
        setCard(event.target.value)
    }

    useEffect(() => {
        getProjects()
    }, []);

    const getCards = async () => {
        const response = await fetchListOfCards(project)
        setCards(response)
    }

    const getDevelopmentDetails = async () => {
        const response = await fetchDevelopmentDetails(card)
        setDevelopmentDetails(response)
    }

    useEffect(() => {
        project && getCards()
    }, [project]);

    useEffect(() => {
        card && getDevelopmentDetails()
    }, [card]);

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
            <Select sx={{width: '200px'}}
                    value={card}
                    onChange={handleCard}
            >
                {
                    cards.issues && cards.issues.map((issue) => {
                        return <MenuItem key={issue.id} value={issue.id}>{issue.key}</MenuItem>
                    })
                }
            </Select>

        </div>
    )
}

export default ProjectPage;