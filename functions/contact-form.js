exports.handler = function (event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ message: 'Invalid HTTP method' }),
    })
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'text/html',
  }

  const response = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Form Submission</title>
        <style>
          /* Add your custom CSS styles here */
          body {
            font-family: 'Lexend', Arial, sans-serif;
            background-color: #0e1e25;
            padding: 20px;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #cccccc;
            border-radius: 15px;
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

          .form__back{
            color:#05736a;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Form Submitted Successfully</h1>
          <p>Thank you for submitting the form. We have received your information.</p>
          <a href="/" class="form__back">Back to our site</a>
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
