import "./colorfield.css"

function ColorField(props) {
    return (
    <div className="column">
        {props.colors.map((d,index) => (<div className="item" style={{ backgroundColor: d }}></div>))}
    </div>
    );
}

export default ColorField;