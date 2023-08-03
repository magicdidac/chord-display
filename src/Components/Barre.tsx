import { strokeColor } from "../utils"

const fretXPosition = [0, 10, 20, 30, 40, 50]

export const Barre = () => {
    const width = 5 * 10
    const y = 4

    return (
        <g>
            <rect
                fill={strokeColor}
                x={fretXPosition[0]}
                y={y}
                width={width}
                height={4}
            />
        </g>
    )
}