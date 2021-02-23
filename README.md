# StatsBomb Interview Test - Ilayda Bakare

**Hi Team**,

Thanks for setting me this challenge, I had an idea of what I'd like to deliver
but found the implementation tricky. Nonetheless, I'd like to submit what I have
put together - I have detailed some of my approaches, successes and the issues I
faced down below, as well as what I'd like to have done if I had more time.

Firstly, I chose to build a React app as I have experience building SPAs with
this framework, however I have not had much practice doing external data manipulation,
which put me at a slight disadvantage. I chose React over Ruby-on-Rails because
the amount of work required to get a single page running was much less hassle
in React.

-------------------------

## Requirements:
1. Overall: You're to create a simple full stack web application to load and
display some football data.
**Result:** Success! Users can see the results of matches, their scores and
a key player from the match, as well as searching for players by name or country.

2. Your first task is to create an API to wrap this data. This API will then be
the only source of data for the next task.
**Result:** Little success. At first I used `fetch` and the `axios` library but
struggled with making a `Node Express server` so the api fetch could have a url
to get the data from.

3. It should display some sort of visualisation of the data from your
API, e.g. a chart or graph etc.
**Result:** Some success, though no charts or graphs were used. I found it difficult
getting the data from relevant sources to display on the site, because I didn't
use a relational database. As such, it was all I could do to render some information
to the screen!

4. You should include some sort of interactive filtering or selection
of data that updates the viz in realtime.
**Result:** Success! A user can search through a list of football players either
by first name or the country they play for.

5. It should persist the user's last filters and selections across
browser sessions.
**Result:** Unfortunately little success as the search resets when the page reloads.

--------------------

## Failures:

- The inability to set up the API to be the only source of data for the task was
my biggest dissapointment, but as I had already spent 2 days researching and
building what I could with React, I didn't want to start from scratch and build a
RoR app with relational database as I wanted to get the task completed ASAP.

- As mentioned, I believe using charts or graphs to compare players' stats to
determine accurately who, statistically, the 'best' players were is something I
feel frustrated I couldn't complete in time.

-----------

## Improvements:

- I think a relational database would've been a far easier way to communicate
between the data, and would have meant having to create far fewer functions, especially
in the `MatchInfo.js` file.

- Being able to implement `State` would mean a better user experience, for example
having the player stats present themselves in a styled div, rather than an alert
at the top of the page.

- Selecting more than one player from the search and implementing logic to compare
said player to another would be a good feature to use charts and graphs for.

- The 'view best player' button is only featured in the home matches of the Match
Data section, as I felt demonstrating that it worked was more important than doing
a similar thing twice. Despite this, I'd like to add to the button and include
more information about why that player (statistically speaking) was the best
player of the match.


**Time and Space complexity**
- I admit that optimising for time or space was not my highest priority, since
accessing data in the first place proved quite challenging, but it is something
I'd like to work on improving
- Time could also have been improved by not calling functions and `const` in other
functions so regularly

------------------------

## The Project:

To access the project simply go to 'https://statsbomb-j2kfn8eme-ilayda-the-disc0queen.vercel.app/'


------------------------

Thanks,

Ilayda Bakare
