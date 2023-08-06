# react-chord-display

A React library to easily generate guitar SVG chords display.

## Install

With npm
```sh
npm i react-chord-display
```

With yarn
```sh
yarn add react-chord-display
```

## Examples

Here are some examples of what the chords would look like.

![chords-screenshot]


## How to use it

```js
import { ChordDisplay, getChordByName } from 'react-chord-display'

const MyChord = () => {

  return (
    <ChordDisplay
      chord={getChordByName('C')}
      {/* chord={Chords.C} */}
    />
  )
}
```

To use the preset chords in the package you can obtain them in two different ways:

1. using the `getChordByName` function, where you will pass the name of the chord you want.
1. Using the `Chords` object, where the preset chords in the package are located.

Alternatively, you can generate your own chord by generating an object that follows the structure of the following example:

```js
{
  name: 'A',
  frets: [-1, 0, 2, 2, 2, 0]
}
```
- -1 means that this string is not played
- 0 means that the string is played in the air
- the rest of the numbers are the fret

If you need to make a capo the chord would look like this:

```js
{
  name: 'F',
  barre: 1,
  frets: [0, 2, 2, 1, 0, 0]
}
```

- the number in the `barre` property is the fret where the capo is desired
- 0 means to play the string in the air (where the capo is located)

*Note*: it is recommended to use the `Chord` interface included in the package if you use typescript

[chords-screenshot]: images/chords.png
