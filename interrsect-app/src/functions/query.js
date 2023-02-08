export async function query(data) {
  console.log('request recieved!');
  let prediction = '';
  const response = await fetch('https://api-inference.huggingface.co/models/kworts/BARTxiv', {
    headers: {
      Authorization: process.env.REACT_APP_HUGGINGFACE_KEY,
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result) {
    console.log('fetch success!');
    const generated = result[0].summary_text;
    prediction = generated;
  }
  return prediction;
}
