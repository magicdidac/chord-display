import { Chord } from "../types/types"
import { Barre } from "./Barre"
import { Dot } from "./Dot"
import { Neck } from "./Neck"
import { getStringPosition, strokeColor } from "../utils"

export interface IChordDisplayProps {
    chord?: Chord
}

export const ChordDisplay = (props: IChordDisplayProps) => {
    const { chord } = props

    if (!chord) return <></>

    const onlyDots = chord.frets
        .map((f, index) => ({ position: index, value: f }))
        .filter(f => !chord.barre || f.value !== 0)

    return (
        <svg
            width='100%'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMinYMin meet'
            viewBox='0 0 80 80'>
            <g
                transform='translate(13, 13)'>
                <Neck
                    frets={chord.frets}
                    barre={chord.barre}
                />
                {chord.barre &&
                    <Barre />
                }
                {onlyDots.map(fret => (
                    <Dot
                        key={fret.position}
                        fret={fret.value}
                        string={6 - fret.position}
                        barre={chord.barre}
                    />
                ))}
                <text
                    fontSize='0.7rem'
                    fill={strokeColor}
                    fontFamily='Verdana'
                    textAnchor='middle'
                    x={getStringPosition(3) - 5}
                    y={60}

                >{chord.name}</text>
            </g>
        </svg>
    )
}