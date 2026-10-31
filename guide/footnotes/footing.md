# How the bot chooses your feet

The dancing bot doesn't decide one step at a time.
When a chart loads, Footnotes looks at the whole chart and chooses a foot for every arrow, picking the combination that's easiest to dance from start to finish.
Rhythm games call this the chart's parity, and Footnotes works it out with SMEditor's [parity checker](../parity) and the rules below.

## The rules

1. **One foot per arrow, two for a jump.** Each arrow is stepped by one foot. When two arrows come at the same time, that's a jump, and both feet land together.
2. **Two feet never share an arrow.** If one foot is standing on an arrow, putting the other foot on it doesn't press it again. So when the same arrow comes twice in a row, the foot that's already on it steps it again.
3. **Alternate when it's comfortable.** Left, right, left, right is the default, as long as each foot can stay on its own side of the pad.
4. **The same foot twice is fine when it's slow.** When steps are 0.4 seconds or more apart, the bot would rather step twice with the same foot than cross your legs over.
5. **Fast passages alternate.** When steps are 0.2 seconds apart or closer, stepping twice with one foot is hard, so the bot alternates, crossing over or turning your body when the chart needs it.
6. **Small moves, facing the screen.** The bot prefers short moves between arrows, and avoids turning your back to the screen.
7. **Holds keep a foot in place.** A foot holding an arrow stays on it until the hold ends, and the other foot takes the other arrows.
8. **Brackets.** Sometimes one foot presses two arrows next to each other at once, with the heel on one and the toes on the other.

## How fast is slow?

What the bot does depends on the time between two steps:

| Time between steps | What the bot does                                            | For example                                                        |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 0.4 s or more      | Steps twice with the same foot rather than crossing over     | Quarter notes up to 150 BPM, eighth notes up to 75 BPM             |
| 0.2 s to 0.4 s     | Weighs both, leaning more toward alternating as it speeds up | Quarter notes from 150 to 300 BPM, eighth notes from 75 to 150 BPM |
| 0.2 s or less      | Alternates, and crosses over when it has to                  | Eighth notes from 150 BPM, sixteenth notes from 75 BPM             |

## An example

Take **Left, Down, Right, Down** as quarter notes at 120 BPM, half a second apart.
Strictly alternating feet would send your left foot across your right leg to reach the Right arrow.
The bot steps Left and Down with the left foot instead, and Right with the right foot, so your legs never cross.

As eighth notes at 150 BPM, a fifth of a second apart, there's no time to step twice with one foot, so the bot alternates and crosses over.

## The Footing setting

The chart editor's **Preferences > Parity > Footing** setting chooses between two sets of rules:

- **Natural** (the default) uses the rules above.
- **Alternating** is SMEditor's original footing. It alternates feet whenever it can, crossing over, or switching feet on an arrow, to avoid stepping twice with the same foot, even in slow passages.

To get to Preferences while practicing, press **Exit practice** first.

## When the footing looks wrong

The bot's footing is a suggestion. Many patterns can be danced more than one way, and the bot shows one of them.
If you'd dance a step with the other foot, trust your body.
To change a step for good, correct it in the chart editor, as described in [Correcting the parity checker](../parity#correcting-the-parity-checker).
