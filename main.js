// Simple JavaScript snippet: Fetch a random joke and display it
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let joke = await response.json();

    console.log("Here's a random joke for you:");
    console.log(`${joke.setup} 😂`);
    console.log(`${joke.punchline}`);
  } catch (error) {
    console.error("Oops! Something went wrong:", error);
  }
}

// Run it
getJoke();
