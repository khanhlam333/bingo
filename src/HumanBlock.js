import React from 'react';
import './HumanBlock.css';
export default function HumanBlock (props) {
    const [mark, setMark] = React.useState(false);
    function marking() {
        setMark(true);
        props.setIndexHuman(prevIndexHuman => {
            return [...prevIndexHuman, props.id]
        })
    }
    return (
        <div className="flex" onClick={marking}>
            <p id="number">{props.number}</p>
            {mark && <div className="x"><span id="slashOne"/> <span id="slashTwo"/></div>}
        </div>
    )
}