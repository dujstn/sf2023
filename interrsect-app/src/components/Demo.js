import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState(
    "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."
  );
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("")
  async function query(data) {
    console.log("fetching...");
    setStatus("Loading...")
    setOutput("")
    const response = await fetch(
      "https://api-inference.huggingface.co/models/kworts/arxiv-bart",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result) {
      console.log("fetch success!");
      const generated = result[0].summary_text;
      console.log(generated);
      setOutput(generated);
      setStatus("Output:")
      console.log(output);
    }
  }
  return (
    <div className="Demo">
      <h1>Demo</h1>
      <h3>Click submit, or add your own text:</h3>
      <textarea
        className="Demo-textbox"
        onChange={(update) => {
          setText(update.target.value);
          console.log(text);
        }}
      >
      The tower is 324 metres (1,063 ft) tall, about the same height as an
      81-storey building, and the tallest structure in Paris. Its base is
      square, measuring 125 metres (410 ft) on each side. During its
      construction, the Eiffel Tower surpassed the Washington Monument to
      become the tallest man-made structure in the world, a title it held for
      41 years until the Chrysler Building in New York City was finished in
      1930. It was the first structure to reach a height of 300 metres. Due to
      the addition of a broadcasting aerial at the top of the tower in 1957,
      it is now taller than the Chrysler Building by 5.2 metres (17 ft).
      Excluding transmitters, the Eiffel Tower is the second tallest
      free-standing structure in France after the Millau Viaduct.
      </textarea>
      <button
        className="Demo-submit"
        onClick={() => {
          query(text);
        }}
      >
        Submit!
      </button>
      <a href="/">back</a>
      <h2>{status}</h2>
      <br />
      <span className="Demo-output">{output}</span>
    </div>
  );
};

export default Demo;
