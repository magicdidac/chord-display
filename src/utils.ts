import Chords from "./Chords"
import { Chord } from "./types/types"

export const offset = -1
export const positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
}
export const getStringPosition = (string: number) =>
    positions.string[string + offset]

export const strokeColor = '#000'

export const getChordByName = (name: string): Chord | undefined => {
    return Object.values(Chords).find(c => c.name === name)
}