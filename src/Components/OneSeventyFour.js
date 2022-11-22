export default function OneSeventyFour () {


    return (
        <>
            <p>
            174! (My first computer website I made on my personal home computer)
#
css
#
javascript
#
beginners
#
music
Main Title Reading 174

Now Under Construction
As a "final project" for pre-work material I needed to make a simple website using JavaScript, CSS, and HTML.

Concept
I wanted to see if I could make a drum machine that would intuitively teach about certain drum & bass conventions. 174 is a common tempo in beats per minute for the genre.

That's how my super cool new computer website on the world wide web "174!" came to be!

Screenshot of the sequencer in full

Successes
Overarchingly I wanted to make something that was easy to use and didn't require explanation so please have a play around with it. I was able to include the following...

-Toggle-able Sequencer buttons for Kick, Snare, Hihats, & 12-tone Bass
-Intuitive visual representation of musical subdivisions
-Play/Pause with spacebar functionality
-A "Hot Sampler" that plays sound effects and one button that stops and "rewinds"
-A video player to keep you company
-Metronome Lighting Effects
-Kick & Snare Sample Banks (These are my own drum designs ^_^)

Challenges To Overcome
I really struggled with the CSS part of this project. Centering things was not always easy and z-index in CSS didn't do what I expected it to do. At present the Hot Sampler doesn't work and I think it's because in order to center the buttons I put them in a div which was one big clickable element, then I had to send it to the back so most of the buttons would still be clickable. I don't understand how I was able to get vertical and horizontal centering successfully on some elements and not others. And elements that came in little groups like the 3 sixteenths that follow each quarter note made the challenge more difficult-- surprisingly sometimes leading to success and other times not.

screenshot showing CSS layout nightmare

THIS THING A HOT MESS, JEEZ.

I'd like to incorporate a way to save presets and I think I can do that by having a field that will spit out and accept characters corresponding to the variables stored in the JavaScript and DOM at different times.

I'd also like to create a "Performer" module that would appear at the top after 5-10 minutes that would allow you to perform macro operations like muting all of the kicks and bass at once with a button, or triggering a riser in time.

I haven't yet learned how to control the volume of samples.

The bass module would work better if it could trigger and mute longer samples instead of stitching together lots of 16th note samples to simulate sustained notes.

Other Feature Ideas:
Break-Chopping module
Make the display show text describing what the user just did
Storing and switching between multiple patterns
Percussion Loop Samplers Done "Simple"
console logs firing in the console

Here are some console.logs I was using to help me keep my head on straight, those are things I want to have the DOM display on the little grey screen on the device to make it feel more alive and also give it an old school drum machine feel.

Things I learned along the way
I learned how to use the stop propagate event which at one point was making it so whenever you clicked a 16th note button it would also trigger a click event on the corresponding 1/4 note button since it is a container of each sixteenth.

It was eye-opening to see the parallels in music creation and coding here-- where sometimes in order to fix something that wasn't that difficult I felt a lot of internal resistance. If fixing the thing would make it a lot better sometimes that motivated me and other times felt like a mental block, just like with music. I was confronting the same ecosystem of emotions and thoughts with any creative problem-solving project I've attempted in the past. I hope to get better at that-- a hard skill to give a name to.

It all made me realize how a simple idea can expand pretty rapidly into something that a team would be needed to care for and bring to fruition. I'm looking forward to working on projects with others soon. If you'd like to team up with me on this please let me know! I think there are a lot of streamers on twitch who would get a kick out of playing with it and could be a great way to meet new people and all that!

Since this was my first site I also learned about Git and other things!

Unexpected Cool Things

There is obviously a "better" way to tackle this problem but the timing wonkiness of using a variable incrementing on a loop as a way to keep track of time passing in the DOM can be really pleasant at times and give it character. I think this character will be applied in different amounts depending on factors like the beefiness of the machine you're running the website on.

Also the default font for the main title looks jacked up in the coolest way to me, it's so bad it's good-- I love it.

In Conclusion
I learned a lot and had fun, there are still problems I can tackle, but it's time to share a little of the work and perhaps re-approach the problem with different strategies again in the future once I've learned more, or iterate on this version here and there as I go.

Onwards and upwards!
-Elliot/Big Sis
            </p>
        </>
    )
}