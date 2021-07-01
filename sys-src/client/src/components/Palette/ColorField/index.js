import "./colorfield.css"

function ColorField(props) {
    return (
    <div className="column" >
        {props.colors.map((d,index) => (<div key={index} className="item" style={{ backgroundColor: d }}></div>))}
    </div>
    );
}

export default ColorField;