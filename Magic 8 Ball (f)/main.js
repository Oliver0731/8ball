
    // Function to get the Magic 8 Ball's response to the user's question
    function getResponse(question) {
      if (question === "") {
        return "Please ask a question...";
      } else if (question === "Does a magic 8 ball actually work?") {
        return "How dare you doubt me!";
      } else if (question === "Is JavaScript awesome?") {
        return "Of Course!";
      } else {
        return randomResponse();
      }
    }

    // Function to generate a random response
    function randomResponse() {
      let random = Math.random();
      if (random < 0.2) {
        return "Without a Doubt";
      } else if (random < 0.4) {
        return "As I see it, Yes";
      } else if (random < 0.6) {
        return "Concentrate and ask again";
      } else if (random < 0.8) {
        return "Don't count on it";
      } else {
        return "Outlook not so good";
      }
    }

    // Function to handle the fate of the question
    function fate() {
      // Get user input
      var input = document.getElementById("question").value;
      // Get the output element
      let answer = document.getElementById("output");
      // Call getResponse function and set the result to answer.innerHTML
      answer.innerHTML = "Answer: " + getResponse(input);
    }

