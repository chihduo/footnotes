# How the bot chooses your feet

The dancing bot doesn't decide one step at a time.
When a chart loads, Footnotes looks at the whole chart and chooses a foot for every arrow, picking the combination that's easiest to dance from start to finish.
Rhythm games call this the chart's parity, and Footnotes works it out with SMEditor's [parity checker](../parity) and the rules below.

## The rules

1. **One foot per arrow, two for a jump.** Each arrow is stepped by one foot. When two arrows come at the same time, that's a jump, and both feet land together.
2. **Two feet never share an arrow.** If one foot is standing on an arrow, putting the other foot on it doesn't press it again. So when the same arrow comes twice in a row, the foot that's already on it steps it again. On the bot, that foot disappears for a moment and lands again on the beat.
3. **Move as little as you can.** Every move takes effort, more the farther a foot travels and much more the faster it has to get there. The bot keeps a foot where it is when it can, and plans ahead: if an arrow is coming back soon, it leaves a foot near it. [How effort is counted](#how-effort-is-counted) has the details.
4. **Avoid swinging across the pad.** In slow passages, a foot would rather step twice to an arrow next to it than swing straight across the pad, between Up and Down or between Left and Right. It still crosses the pad when the alternative is moving both feet and crossing over, or stepping twice quickly with the same foot.
5. **Alternate when it's comfortable.** Left, right, left, right is the default, as long as each foot can stay on its own side of the pad.
6. **The same foot twice is fine when it's slow.** When steps are 0.4 seconds or more apart, the bot would rather step twice with the same foot than cross your legs over.
7. **Fast passages alternate.** When steps are 0.2 seconds apart or closer, stepping twice with one foot is hard, so the bot alternates, crossing over or turning your body when the chart needs it.
8. **Face the screen.** The bot avoids turning your back to the screen.
9. **Holds keep a foot in place.** A foot holding an arrow stays on it until the hold ends, and the other foot takes the other arrows.
10. **No brackets.** A foot never presses two arrows at once, even two next to each other, so two arrows at the same time are always a jump with both feet. The only exceptions are charts that leave no other way: three arrows at once, or a jump while one foot is holding an arrow. Then one foot takes two arrows next to each other, with the heel on one and the toes on the other.

## How fast is slow?

What the bot does depends on the time between two steps:

| Time between steps | What the bot does                                            | For example                                                        |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| 0.4 s or more      | Steps twice with the same foot rather than crossing over     | Quarter notes up to 150 BPM, eighth notes up to 75 BPM             |
| 0.2 s to 0.4 s     | Weighs both, leaning more toward alternating as it speeds up | Quarter notes from 150 to 300 BPM, eighth notes from 75 to 150 BPM |
| 0.2 s or less      | Alternates, and crosses over when it has to                  | Eighth notes from 150 BPM, sixteenth notes from 75 BPM             |

## How effort is counted

Each time a foot moves to another arrow, the bot counts the effort of the move:

**effort = 50 × distance + 2 × speed²**

- **Distance** is in panels: about 1.4 to an arrow next to the one the foot is on, and 2 to the opposite arrow.
- **Speed** is the distance divided by the time that foot has had since its own last step. When your feet take turns, each foot has twice the time between steps.

The first part makes every move cost something, so feet stay put when they can. The second part grows with the square of the speed, like the energy of swinging your leg, so long, fast moves cost the most.

A move straight across the pad, between Up and Down or Left and Right, costs an extra 60. That's enough for a slow step with the same foot to a next-door arrow to win, but not enough to make the bot move both feet and cross over, or step twice quickly with the same foot, instead.

| Move                        | Time the foot has | Effort |
| --------------------------- | ----------------- | ------ |
| Stepping again where it is  | any               | 0      |
| To a next-door arrow        | 1 s               | 75     |
| To a next-door arrow        | 0.5 s             | 87     |
| To a next-door arrow        | 0.25 s            | 135    |
| Across the pad (Left–Right) | 0.5 s             | 192    |
| Across the pad (Left–Right) | 0.25 s            | 288    |

The bot adds these up, together with the costs of crossing over, turning, and stepping twice with the same foot, and picks the footing with the smallest total for the whole chart.

## Examples

Take **Left, Down, Right, Down** as quarter notes at 120 BPM, half a second apart.
Strictly alternating feet would send your left foot across your right leg to reach the Right arrow.
The bot steps Left and Down with the left foot instead, and Right with the right foot, so your legs never cross.

As eighth notes at 150 BPM, a fifth of a second apart, there's no time to step twice with one foot, so the bot alternates and crosses over.

Say your left foot is on Down and your right foot on Right, and then Up and Right come together.
The bot moves only your left foot, from Down across the pad to Up, and your right foot stays on Right.
Moving both feet instead, with the right foot to Up and the left foot to Right, would avoid crossing the pad but cross your legs over.

Take **Left, Right, Down, Up, Down, Up, Left, Down**, half a second apart.
Your right foot could take Up and your left foot Down, but then the last Down would mean swinging the right foot across the pad from Up to Down.
The bot plans ahead: your right foot takes Down and your left foot takes Up, so the last Down is already under your right foot.
That's 4.2 panels of travel instead of 6.2, for one extra step with the same foot: the left foot steps Up and then Left.

## The Footing setting

The **Footing** menu in the bottom bar chooses between three sets of rules while you practice. The chart editor has the same setting in **Preferences > Parity > Footing**.

- **Minimal effort** (the default) uses all the rules above.
- **Natural** uses the same rules, except that it counts movement, including moves across the pad, much more lightly, so it alternates feet more and plans ahead less. It was the default before Minimal effort.
- **Alternating** is SMEditor's original footing. It alternates feet whenever it can, crossing over, or switching feet on an arrow, to avoid stepping twice with the same foot, even in slow passages.

All three follow the no-brackets rule, so even Alternating never presses two arrows with one foot unless the chart leaves no other way.
The bot switches to the new footing straight away.

## When the footing looks wrong

The bot's footing is a suggestion. Many patterns can be danced more than one way, and the bot shows one of them.
If you'd dance a step with the other foot, trust your body.
To change a step for good, correct it in the chart editor, as described in [Correcting the parity checker](../parity#correcting-the-parity-checker).
