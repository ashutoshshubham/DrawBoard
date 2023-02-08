import React, { useState } from 'react'
import { Stage, Layer, Rect, Text, Circle, Line, Transformer } from 'react-konva';


const Trial = () => {

    const [content, setContent] = useState([])

    const createShape = ({ name, x, y, w, h, stroke, r }) => {
        if (name === 'rectangle') {
            return <Rect x={x} y={y} width={w} height={h} stroke={stroke} draggable />
        }
        if (name === 'circle') {
            return <Circle x={x} y={y} stroke={stroke} radius={r} draggable />
        }
        if (name === 'line') {
            return (
                lines.map((line, i) => (
                    <Line
                        draggable
                        // key={i}
                        points={line.points}
                        stroke="#df4b26"
                        strokeWidth={5}
                        tension={0.5}
                        lineCap="round"
                        lineJoin="round"
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                    />
                ))
            )
        }
    }

    const showContent = () => {
        return content.map(
            shape => (
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


    const line = () => {
        const shape = {
            name: 'line'
        }
        setContent([...content, shape])
    }

    const clear = () => {
        setContent([])
        setLines([])
    }

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };


    return (
        <div className="body1">
            <div className='container'>
                <div className="card">
                    <div className="card-header">
                        <h3>Drawboard</h3>
                    </div>
                    {/* </div> */}
                    <div className='d-flex'>
                        <div className='m-1'>
                            <button className='btn btn-success mb-2 d-block mt-4' onClick={rectangle}>
                                <span class="material-symbols-outlined">
                                    rectangle
                                </span>
                            </button>
                            <button className='btn btn-success mb-2 d-block mt-4' onClick={circle}>
                                <span class="material-symbols-outlined">
                                    circle
                                </span>
                            </button>
                            <button className='btn btn-success mb-2 d-block mt-4' onClick={line}>
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                            <button className='btn btn-success mb-2 d-block mt-4' onClick={clear}>
                                <span class="material-symbols-outlined">
                                    delete
                                </span>
                            </button>

                            {/* <select
                                value={tool}
                                onChange={(e) => {
                                    setTool(e.target.value);
                                }}
                            >
                                <option value="pen">Pen</option>
                                <option value="eraser">Eraser</option>
                            </select> */}

                        </div>


                        <div>
                            <Stage width={window.innerWidth - 320} height={window.innerHeight - 140} onMouseDown={handleMouseDown}
                                onMousemove={handleMouseMove}
                                onMouseup={handleMouseUp} className='bg-success' style={{ width: '79vw', }}>
                                <Layer>

                                    {showContent()}


                                </Layer>
                            </Stage>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trial