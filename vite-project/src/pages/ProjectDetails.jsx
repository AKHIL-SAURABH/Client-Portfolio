import React from 'react'
import { useParams, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { projects } from "../data/projects"
import Projects from '../components/Projects'

function ProjectDetails() {
  const { slug } = useParams()

  const currentProject = projects.find(
    project => project.id === slug
  )

  if (!currentProject) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Navbar />
      <Projects project={currentProject} />
    </>

  )
}

export default ProjectDetails