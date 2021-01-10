import React, {useState} from 'react';

function ButtonSum() {
    const [contador,setContador] = useState(0)

    const handleSoma = () => {
        setContador(contador + 1)
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', width: 50}}>
            <span>{contador}</span>
            <button onClick={handleSoma}>Sum</button>
        </div>
    )
};

export default ButtonSum;