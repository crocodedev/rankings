export async function handler(event) {
  const data = JSON.parse(event.body)

  // Добавьте код для обработки данных формы

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully' }),
  }
}
