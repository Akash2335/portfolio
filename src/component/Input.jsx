const INPUT = ({ className, placeholder, id, name, type,value, onChange }) => {
    return <input type={ type } placeholder={ placeholder } onChange={onChange} value={value} id={ id } name={ name } className={className}/>;
};
export default INPUT;