import React, { useState } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Drawboard = () => {

    const [content, setContent] = useState(
        [{
            // name: 'rectangle',
            // x : 200,
            // y : 200,
            // w : 100,
            // h : 100,
            // stroke : 'red'
        }, {
            // name : 'circle',
            // x : 300,
            // y : 200,
            // r : 50,
            // stroke : 'green'
        }]
    )

    const createShape = ({ name, x, y, w, h, stroke, r }) => {
        if (name === 'rectangle') {
            return <Rect x={x} y={y} width={w} height={h} stroke={stroke} draggable />
        }
        else if (name === 'circle') {
            return <Circle x={x} y={y} radius={r} stroke={stroke} draggable />
        }
    }

    const showContent = () => {
        return content.map(shape => (
            createShape(shape)
        ))
    }

    // const addShape = () => {
    //     const shape = {
    // name: 'rectangle',
    // x: 200,
    // y: 200,
    // w: 100,
    // h: 100,
    // stroke: 'red', 
    //     }
    //     setContent([...content, shape])
    // }

    const rectangle = () => {
        const shape = {
            name: 'rectangle',
            x: 200,
            y: 200,
            w: 100,
            h: 100,
            stroke: 'red',
        }
        setContent([...content, shape])
    }

    const circle = () => {
        const shape = {
            name : 'cricle',
            x: 300,
            y: 200,
            r: 50,
            stroke: 'green'
        }
    }


    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    Drawboard
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            {/* <button onClick={addShape}>Rectangle</button>
                            <button onClick={addShape}>Circle</button> */}
                            <button onClick={rectangle}>Rectangle</button>
                            <button onClick={circle}>Circle</button>
                        </div>
                        <div className="col-md-10">

                            <Stage width={window.innerWidth} height={window.innerHeight}>
                                <Layer>
                                    {showContent()}
                                    {/* <Rect
                                        x={20}
                                        y={50}
                                        width={100}
                                        height={100}
                                        stroke="red"
                                        shadowBlur={10}
                                    /> */}
                                </Layer>
                            </Stage>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Drawboard