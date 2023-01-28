import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Circle, Line, Transformer } from 'react-konva';
import './Drawboard.css';

const Drawboard = () => {

    const [content, setContent] = useState([]);
    const canvasContainer = useRef(null);

    const createShape = ({ name, x, y, w, h, stroke, r }) => {
        if (name === 'rectangle') {
            return <Rect x={x} y={y} width={w} height={h} stroke={stroke} draggable />
        }
        if (name === 'circle') {
            return <Circle x={x} y={y} stroke={stroke} radius={r} draggable />
        }
        else {

        }
    }

    const showContent = () => {
        return content.map(shape => (
            createShape(shape)
        ))
    }

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
            name: 'circle',
            x: 300,
            y: 200,
            r: 50,
            stroke: 'green'
        }
        setContent([...content, shape])
    }

    const clear = () => {
        setContent([])
    }
    


    return (
        <div className="body1">
            <div className='container'style={{height:'93vh'}}>
                <div className="card" style={{height:'90vh'}}>
                    <div className="card-header">
                        <h3>Drawboard</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2 bg-primary">
                                <button className='btn btn-success mb-2 d-block' onClick={rectangle}>Rectangle</button>
                                <button className='btn btn-success mb-2 d-block' onClick={circle}>Circle</button>
                                <button className='btn btn-success mb-2 d-block' onClick={clear}>Clear</button>
                            </div>
                            
                            <div className="col-md-10 bg-success" ref={canvasContainer} style={{height: '100%'}}>
                                <Stage width={canvasContainer.current.innerWidth} height={canvasContainer.current.innerHeight}>
                                {/* <Stage> */}
                                    <Layer>
                                        {showContent()}
                                    </Layer>
                                </Stage>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawboard