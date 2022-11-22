export default function Foley () {


    return (
        <>
            <p>
            User stories: I can use talk-to-text to read my child a story and hear sounds returned to me when I use sound-words recognized by the system. I can choose the length and number of sounds to fine tune the way sounds are played. I can also create custom triggers to make a specific sound play when i say a specific phrase or word.

Elevator pitch: Our web app plays relevant sounds when a user reads a story, making use of the computer’s built-in dictation functionality. The user can adjust length and quantity of sounds that play. Our API (Freesound) querys and returns sounds that match our internal database of sound-words. Potential challenges we are anticipating include: possible delay in playbacks due to number of possible sounds, inaccuracy in sound returns, overall clumsiness in storytelling when combined with auditory effects, etc.
            </p>
        </>
    )
}