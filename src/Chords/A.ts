import { Chord } from "../types/types"

export const A: Chord = {
  name: 'A',
  frets: [-1, 0, 2, 2, 2, 0]
}

export const Am: Chord = {
  name: 'Am',
  frets: [-1, 0, 2, 2, 1, 0]
}

export const Asharp: Chord = {
  name: 'A#',
  barre: 1,
  frets: [-1, 0, 2, 2, 2, 0]
}

export const Asharpm: Chord = {
  name: 'A#m',
  barre: 1,
  frets: [-1, 0, 2, 2, 1, 0]
}

export const Am9: Chord = {
  name: 'Am9',
  barre: 5,
  frets: [0, 2, 0, 0, 0, 2]
}