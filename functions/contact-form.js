exports.handler = function (event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ message: 'Invalid HTTP method' }),
    })
  }

  // Разрешаем отправку формы с другого домена
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'text/html', // Set the content type to HTML
  }

  const response = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Form Submission</title>
        <style>
          /* Add your custom CSS styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            padding: 20px;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 5px;
            padding: 40px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          }

          h1 {
            font-size: 24px;
            color: #333333;
            margin-top: 0;
          }

          p {
            font-size: 16px;
            color: #666666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Form Submitted Successfully</h1>
          <p>Thank you for submitting the form. We have received your information.</p>
        </div>
      </body>
    </html>
  `

  callback(null, {
    statusCode: 200,
    headers,
    body: response,
  })
}
