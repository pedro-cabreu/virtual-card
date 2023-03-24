import React, { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useRouter } from 'next/router';

export default function ImageGenerator() {
  const [qrCodeCanvas, setQrCodeCanvas] = useState(null);
  const canvasRef = useRef(null);
  const router = useRouter();
  const name = router.query.name;

  useEffect(() => {

    // Obtém o elemento Canvas do QR code
    const canvasQr = document.querySelector("#qr-code-svg");
    setQrCodeCanvas(canvasQr);
  }, [name]);
  

  useEffect(() => {
    // Desenha o canvas do QR code no canvas principal
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Seta o tamanho do canvas
    canvas.width = 400;
    canvas.height = 500;

    const x = canvas.width / 2; 
    // Limpa o canvas
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Escreve o texto
    context.font = "20px Arial";
    context.textAlign = "center"; // Centraliza o texto horizontalmente
    context.fillStyle = "#000000";
    context.fillText(name, x, 30);
    context.fillText("Scan Me", x, 90);

    // Desenha o QR code
    if (qrCodeCanvas) {
      context.drawImage(qrCodeCanvas, 100, 100);
    }
  }, [qrCodeCanvas]);

  const handleDownloadClick = () => {

    // Obtém o canvas principal
    const canvas = canvasRef.current;
    
    // Cria um link para download do canvas
    const downloadLink = document.createElement("a");
    downloadLink.download = "qrcode.png";
    downloadLink.href = canvas.toDataURL("image/png;base64");

    // Clica no link para iniciar o download
    downloadLink.click();
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen"> 
      <canvas ref={canvasRef} width={400} height={400} />
      <button onClick={handleDownloadClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" >Download Image</button>
      <div style={{ display: "none" }}>
        <QRCodeCanvas id="qr-code-svg" value={'http://localhost:3000/' + name} size={200} />
      </div>
    </div>
  );
}
