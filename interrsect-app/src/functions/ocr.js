import { encode } from 'base-64';

export async function ocr(link) {
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_CLOUD_VISION_KEY}`;

  async function toBase(blob) {
    return new Promise((resolve, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
    });
  }
  const blob = await fetch(link).then((r) => r.blob());
  let data = await toBase(blob);
  data = data.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      requests: [
        {
          image: {
            content: data,
          },
          features: [{ type: 'TEXT_DETECTION' }],
        },
      ],
    }),
  });

  const result = await response.json();
  const text = result.responses[0].fullTextAnnotation.text;
  return text;
}
