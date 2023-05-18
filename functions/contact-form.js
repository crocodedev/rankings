exports.handler = function (event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ message: 'Invalid HTTP method' }),
    })
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully' }),
  })
}
