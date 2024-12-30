const params = new URLSearchParams(window.location.search);
const url = params.get("url");

if (url) {
  const qrCodeContainer = document.getElementById("qrcode");
  const qrCode = new QRCode(qrCodeContainer, {
    text: url,
    width: 300,
    height: 300
  });
}
