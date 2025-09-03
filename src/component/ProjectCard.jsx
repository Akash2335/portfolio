const ProjectCard = ({project,index}) => {
    return (
        <div className="sticky overflow-hidden transition-transform duration-500 delay-900 rounded-2xl border-2 border-white/15 bg-gray-800 p-8 md:flex md:items-center" style={{top:`calc(100px + ${index*30}px)`}} key={index}>
            {/* Project Containt */ }
            <div className="flex flex-1 flex-col gap-5">
                <h2 className="font-serif text-2xl">{ project.title }</h2>
                <hr className="border-t-2 border-white/10" />
                <p className="text-sm text-white/30">{ project.description}</p>
            </div>
            {/* Project image*/ }
            <div className="mt-5 flex items-center justify-center md:mt-0 md:flex-1">
                <img src={project.image} alt={project.title} className="-mb-10 mt-8 h-52 w-full rounded-lg object-cover md:-mr-20 md:h-full"/>
            </div>
        </div>
    )
}
export default ProjectCard;