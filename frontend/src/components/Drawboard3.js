import React from 'react'
import { Stage, Layer, Rect, Transformer, Line, Text } from 'react-konva';

// const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
//     const shapeRef = React.useRef();
//     const trRef = React.useRef();

//     React.useEffect(() => {
//         if (isSelected) {
//             // we need to attach transformer manually
//             trRef.current.nodes([shapeRef.current]);
//             trRef.current.getLayer().batchDraw();
//         }
//     }, [isSelected]);

//     return (
//         <React.Fragment>
//             <Rect
//                 onClick={onSelect}
//                 // onTap={onSelect}
//                 ref={shapeRef}
//                 {...shapeProps}
//                 draggable
//                 onDragEnd={(e) => {
//                     onChange({
//                         ...shapeProps,
//                         x: e.target.x(),
//                         y: e.target.y(),
//                     });
//                 }}
//                 onTransformEnd={(e) => {
//                     // transformer is changing scale of the node
//                     // and NOT its width or height
//                     // but in the store we have only width and height
//                     // to match the data better we will reset scale on transform end
//                     const node = shapeRef.current;
//                     const scaleX = node.scaleX();
//                     const scaleY = node.scaleY();

//                     // we will reset it back
//                     node.scaleX(1);
//                     node.scaleY(1);
//                     onChange({
//                         ...shapeProps,
//                         x: node.x(),
//                         y: node.y(),
//                         // set minimal value
//                         width: Math.max(5, node.width() * scaleX),
//                         height: Math.max(node.height() * scaleY),
//                     });
//                 }}
//             />
//             {isSelected && (
//                 <Transformer
//                     ref={trRef}
//                     boundBoxFunc={(oldBox, newBox) => {
//                         // limit resize
//                         if (newBox.width < 5 || newBox.height < 5) {
//                             return oldBox;
//                         }
//                         return newBox;
//                     }}
//                 />
//             )}
//         </React.Fragment>
//     );
// };

// const initialRectangles = [
//     {
//         x: 10,
//         y: 10,
//         width: 100,
//         height: 100,
//         stroke: 'red',
//         id: 'rect1',
//     },
//     {
//         x: 150,
//         y: 150,
//         width: 100,
//         height: 100,
//         stroke: 'green',
//         id: 'rect2',
//     },
// ];

const Drawboard3 = () => {

    // const [rectangles, setRectangles] = React.useState(initialRectangles);
    // const [selectedId, selectShape] = React.useState(null);

    // const checkDeselect = (e) => {
    //     // deselect when clicked on empty area
    //     const clickedOnEmpty = e.target === e.target.getStage();
    //     if (clickedOnEmpty) {
    //       selectShape(null);
    //     }
    //   };


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
        <div>
            <select
                value={tool}
                onChange={(e) => {
                    setTool(e.target.value);
                }}
            >
                <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
            >
                <Layer>
                    {/* <Text text="Just start drawing" x={5} y={30} /> */}
                    {lines.map((line, i) => (
                        <Line
                            key={i}
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
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default Drawboard3