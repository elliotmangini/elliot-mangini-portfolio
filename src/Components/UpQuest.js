export default function UpQuest() {
  return (
    <>
      <p>
        `I'll keep this short! This will work if you're starting with a large
        number of locations and you have their latitude and longitude. For this
        project I was working with React so we are using a helper function to
        parse a center out of those above items and pass it to the map
        component. Then we pass the state down to the map component and use it
        here (in my case in the GoogleMap component): Feel free to scaffold this
        directly. We're basically just adding all the lats and dividing by the
        number of places, same for longs. If we have two places at 0, 10 and 0,
        20 then our center point comes out to be 0, 15. Not too complex but
        figured it might help someone out! Cheers -Elliot/Big Sis`
      </p>
    </>
  );
}
