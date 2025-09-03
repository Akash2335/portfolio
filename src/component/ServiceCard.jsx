const ServiceCard = ({services}) => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border-2 border-white/5 p-2">
            <services.icon className='rounded-full border-2 border-white/15 bg-white/5 p-2 text-6xl text-blue-500 hover:shadow hover:shadow-cyan-200'/>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white/80 font-serif">{ services.title }</h3>
                <p className="text-white/40">{ services.description}</p>
            </div>
        </div>
    )
}
export default ServiceCard;