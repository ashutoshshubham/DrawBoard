import React, { useState } from 'react'
import { Stage, Layer, Rect, Text, Circle, Line, Transformer } from 'react-konva';
import './Drawboard.css';

const Drawboard4 = () => {

  const [content, setContent] = useState([])

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

  const resize = () => {
    window.resizeTo(
      {
        width: '720px',
        height: '720px'
      }
    )
  }


  return (
    <div className="body1">
      <div className='container'>
        {/* //     <div className="card" style={{ height: '90vh' }}>
    //     <div className="card" width={window.innerWidth} height={window.innerHeight}>
    //     <div className="card-header">
    //       <h3>DrawBoard</h3>
    //     </div>
    //     <div className="card-body">
    //       <div className="row">
    //         <div className="col-md-2 bg-danger" style={{width:130}}>
    //           <button className='btn btn-success mb-2 d-block' onClick={rectangle}>Rectangle</button>
    //           <button className='btn btn-success mb-2 d-block' onClick={circle}>Circle</button>
    //           <button className='btn btn-success mb-2 d-block' onClick={clear}>Clear</button>
    //         </div>

    //         <div className="col-md-10 bg-primary" style={{width:'74vw'}}>
    //           <Stage width={window.innerWidth} height={window.innerHeight}>
    //             <Layer>
    //               {showContent()}
    //             </Layer>
    //           </Stage>

    //         </div>
    //       </div>
    //     </div>
    //   </div> */}


        <div className="row">
          <div className="col-md-2 bg-danger" style={{ width: 130 }}>
            <button className='btn btn-success mb-2 d-block mt-3' onClick={rectangle}>Rectangle</button>
            <button className='btn btn-success mb-2 d-block' onClick={circle}>Circle</button>
            <button className='btn btn-success mb-2 d-block' onClick={clear}>Clear</button>
          </div>

          <div className="col-md-10" style={{ width: '74vw', height:'94vh'}}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
            {/* <Stage> */}
              <Layer>
                {showContent()}
              </Layer>
            </Stage>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Drawboard4