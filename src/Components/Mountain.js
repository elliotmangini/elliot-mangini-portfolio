export default function Mountain () {


    return (
        <>
            <p>
            How To Finish Strong
This week was our second code challenge at Flat Iron and I came up against one of my biggest personal weaknesses.

I love conceptual work. I'm a decent beginner dev. I know I'm motivated by working on things I care about. That was the first problem.

We started by brainstorming a (what I thought was) pretty cool idea for a site that would use user's geolocation to display an astronomically accurate representation of the sky's darkness/lightness and maybe hue dynamically. The idea was that it could be used as a mood light, or on a TV that wasn't particularly in use. It could be used by people who are incarcerated or by yoga studios or anywhere sunshine would be of use. It could be brought into other projects in a modular fashion to style things based on the day/night cycle. I wanted to make it so that multiple skyboxes could be loaded side-by-side so that let's say your family member were in a different time zone, you could have this tiny art piece in a digital picture frame somewhere in your house that let you "look at their sky". It had a cool name-- "Circadian!" and I liked the idea. I thought it was sleek and wouldn't require me to do hardly any CSS (the true measure of a good project) lol.

Circadian!
We started and made decent headway during the first 72 hours-- here were the challenges, victories, and lessons I learned along the way...

Grabbing User Geolocation
Geolocation JS Screenshot

This part wasn't too hard.

We Used An API For Sunrise/Set Times
API Code

This didn't work too bad. 5 out of 10 on this API, I ran into occasional weirdness. A few times I ran an infinite loop of GET requests because dependency arrays are tricky and I hadn't totally figured them out yet--

VPN Screenshot

They kicked my IP so I opened a VPN that way I could keep working on it. That was a fun little trick.

I really struggled with state re-renders and dependency arrays-- more on that later.

But here's where the rubber hit the road...

So much math-based-code

What a nightmare...

Something like 85% of this is working-- I had to slice and reformat date and time strings... multiply and divide by 60, account for AM + PM, at first I thought I had to account for time-zones until I realized the API gave me UTC rise and set times and I could grab UTC from the user's machine:

Get UTC Time for the User

Eventually subtracted set-time from rise-time to figure out the length of each phase, and writing somewhat clunky logic to figure out what phase of the day the user was in-- night, day, rising, or setting. Accounting for the length I planned for the color-change animations to be, 90 minutes- 60 minutes.

Code for determining phase

Except for API and state re-render weirdness this was working. It would figure out the phase.

But what happens when the user boots the page when the sun is halfway risen, how do I delay the animation?

Animation delay logic

This was working too haha.

Here's how you start an animation halfway in the CSS by writing JSX, once you've figured out how far you wanna delay it...

Code for setting animation delay in JSX

At some point though the re-render problems I was facing, the difficulty in testing a 90 minute animation. Concerns about how in some places the day starts, the sun sets and then rises afterwards it became too much for me to hold in my working memory which is why my code is riddled with logs and eventually we decided on a different approach.

Doing The Bare Minimum
We made an absolute shitpost of a web app purely hitting on the deliverables-- intentionally banal.

Shitpost website

It took a little over an hour and a half-- I had to learn React Routing.

I left school feeling really upset with myself that day-- like I had let my teammates down as well as been shitty about the spirit of the project.

But this actually worked out okay because what we ended up with was a really viable frame for something meaningful.

I spent a lot of time feeling overwhelmed this week and my mom reminded me to focus on the present moment. I spent some time meditating and doing yoga and as many people know even a little bit helps.

This more-or-less led me towards the idea for the third project.

Mountain!
I usually set my sights high and it can feel like everything I want to do in this life is daunting-- I get overwhelmed.

I use a ton of to-do lists and taking my mom's advice I came up with the idea for one that would encourage me to focus on the present moment. Sam Harris had let me know in a guided meditation earlier in the week that was "all I had".

The idea was to take my regularly-generated 30-plus-item to-do-list and have the app feed it back to me one action at a time. I only ever need to be focused on the thing I do right now...

The second project was 85% of the way towards doing this already.

Mountain! Screenshot

Making this project we settled on was a bit like writing a lab. I realized that nailing the deliverables first and then adapting the code was pretty easy. I felt a bit cheeky about learning to better take baby steps throughout this week and landing on a project which attempted to crystallize that.

I got stuck a couple of times and tried jenky solutions- these were largely related to my using dependency arrays and then using setState functions with the wrong JS array methods. What follows is a whistlestop tour of the code which does a full CRUD round on our db.json and delivers fully on the concept despite being a little understyled.

Code for routing App-side.
Code for routing App-side.

Code for routing Nav-side.
Code for routing Nav-side.

CRUD

Create

Read

Update

Destroy

I made use of a lot of what I learned in the labs leading to this project:

Filter and Map:
Filter and Map

And I added in one or two more on brand bits, too:

Image description

I styled with just 47 lines of CSS:

CSS

Ultimately, I felt I ended up with very clean code-- and have looked at the experience as a great exercise.
It was lovely to work with Jake on the project, too.

If you'd like to check it out you can clone the repo here!

Onwards and upwards to the next mountain top.
            </p>
        </>
    )
}