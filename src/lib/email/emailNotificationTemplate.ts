import Banner from '../../../public/GmailBanner.webp';

interface EmailTemplateData {
  description: string;
  info: string;
}

export const emailNotificationTemplate = ({ description, info }: EmailTemplateData) => `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f6f6f6;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border: 1px solid #ddd;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .header img {
        width: 100%;
        max-width: 600px;
        height: auto;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin: 20px 0 10px 0;
      }
      .content {
        font-size: 16px;
        line-height: 1.5;
      }
      .description {
        color: #04a8c4;
      }
      .info {
        color: #df8e1f;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="${Banner}" alt="Gmail Banner">
      </div>
      <div class="content">
        <p class="description">${description}</p>
        <p class="info">${info}</p>
      </div>
    </div>
  </body>
  </html>
`;
