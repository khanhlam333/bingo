import React from 'react';
import './MachineBlock.css';
export default function MachineBlock (props) {
    const [mark, setMark] = React.useState(false);
    React.useEffect(() => {
        if (props.number == props.numberTwo) {
            setMark(true);
            props.setIndexMachine(prevIndexMachine => {
                return [...prevIndexMachine, props.id]
            })
        }
    }, [props.numberTwo])
    return (
        <div className="flexM">
            <p id="numberM">{props.number}</p> 
            {mark && <div className="xM"><span id="slashOneM"/> <span id="slashTwoM"/></div>}
        </div>
    )
}