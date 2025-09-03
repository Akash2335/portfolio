import ProjectCard from "../component/ProjectCard";
import SectionTitle from "../component/SectionTitle";
import { projects } from "../contens";

const Project = () => {
    return <section className="py-16" id="projects">
        <SectionTitle title="Personl Projects" />
        <div className="container mt-10">
            {/* Projects */}
            <div className="space-y-6">
                {
                    projects.map( ( project, i ) => (
                        <ProjectCard project={project} index={i} key={i}/>
                    ))
                }
            </div>
        </div>
    </section>
}
export default Project;