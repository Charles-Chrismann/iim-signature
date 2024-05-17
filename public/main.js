signaturePad._isEmpty = false
const canvas1 = document.querySelector('canvas.border');
const ctx = canvas1.getContext('2d');
const img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'http://localhost:3000/aa.jpeg';
img.onload = () => {
  const Vcanvas = document.createElement('canvas');
  const Vctx = Vcanvas.getContext('2d');
  Vcanvas.width = img.width;
  Vcanvas.height = img.height;
  Vctx.drawImage(img, 0, 0);
  const imageData = Vctx.getImageData(0, 0, Vcanvas.width, Vcanvas.height);

  canvas1.width = img.width;
  canvas1.height = img.height;
  let ctx_data = ctx.createImageData(img.width, img.height);

  for (let i = 0; i < ctx_data.data.length; i += 4) {
    ctx_data.data[i] = imageData.data[i];
    ctx_data.data[i + 1] = imageData.data[i + 1];
    ctx_data.data[i + 2] = imageData.data[i + 2];
    ctx_data.data[i + 3] = imageData.data[i + 3];
  }

  ctx.putImageData(ctx_data, 0, 0);
};