// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes input
function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstAnimal= cleanAndCap(words.get('animal-1'));
const place = cleanAndCap(words.get('place'));

const answer = cleanAndCap(words.get('answer'));
const conjunction = answer === 'Yes' ? 'and' : 'but';
const secondNoun = words.get('noun-2');
const thirdNoun = words.get('noun-3');
const speed = words.get('speed');
const adj1 = words.get('adj-1');
const secondVerb = words.get('verb-2');
const noun = cleanAndCap(words.get('noun'));
const quote = words.get('quote');

const verb1 = words.get('verb-1');
const num1 = words.get('num-1');
const message = words.get('message');

// The string containing HTML and text which will populate the story.html page
const story = `<p>A <span class="word" title="id: animal-1">${firstAnimal}</span> wanted to go to <span class="word" title="id: place">${place}</span> but he was too slow.</p>

<p>"Do you ever get anywhere?", a <span class="word" title="id: noun">${noun}</span> asked with a mocking laugh.</p>

<p>"<span class="word" title="id: answer">${answer}</span>," replied the <span class="word" title="id: animal-1">${firstAnimal}</span>, "${conjunction} I will get there <span class="word" title="id: speed">${speed}</span> than you think. I'll <span class="word" title="id: verb-2">${secondVerb}</span> you a <span class="word" title="id: verb-1">${secondNoun}</span> and prove it."</p>

<p>The <span class="word" title="id: noun">${noun}</span> was much <span class="word" title="id: adj-1">${adj1}</span> at that idea, but for the fun of the thing he agreed. So they got the <span class="word" title="id: noun-3">${thirdNoun}</span>, to act as judge, who told them: "<span class="word" title="id: quote">${quote}</span>".</p>

<p>The <span class="word" title="id: animal-1">${firstAnimal}</span> was soon far out of sight, and to make the <span class="word" title="id: noun">${noun}</span> feel very deeply how ridiculous it was for him to try <span class="word" title="id: verb-2">${secondVerb}</span>ing <span class="word" title="id: verb-1">${secondNoun}</span> with a <span class="word" title="id: animal-1">${firstAnimal}</span>, he went off the course to practice <span class="word" title="id: verb-1">${verb1}</span> for <span class="word" title="id: num-1">${num1}</span> hours until the <span class="word" title="id: animal-1">${firstAnimal}</span> should catch up.</p>

<p>The <span class="word" title="id: noun">${noun}</span> meanwhile kept going slowly but steadily, and, after a time, passed the place where the <span class="word" title="animal-1">${firstAnimal}</span> was <span class="word" title="id: verb-1">${verb1}</span>. The <span class="word" title="id: animal-1">${firstAnimal}</span> was so caught up in <span class="word" title="id: verb-1">${verb1}</span>; and when at last he did stop, the <span class="word" title="id: noun">${noun}</span> was near the goal. The <span class="word" title="id: animal-1">${firstAnimal}</span> now <span class="word" title="id: verb-2">${secondVerb}</span>ed his swiftest, but he could not overtake the <span class="word" title="id: noun">${noun}</span> in time.</p>`;

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `A <span class="word" title="id: animal-1">${firstAnimal}</span> in  <span class="word" title="id: place">${place}</span>`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;
