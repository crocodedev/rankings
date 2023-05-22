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
  }

  callback(null, {
    statusCode: 200,
    headers, // Добавляем заголовки в ответ
    body: JSON.stringify({ message: 'Form submitted successfully' }),
  })
}
