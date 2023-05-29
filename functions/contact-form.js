import fetch from 'node-fetch'

export async function handler(event) {
  try {
    const data = JSON.parse(event.body)

    const name = data.name
    const email = data.email
    const message = data.message

    const response = await fetch('https://api.netlify.com/api/v1/forms/FORM_ID/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'q3jxcxrRHeNyv4MQqWM3gcczP0QhnTbZQIomcaJW6OI',
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          message,
        },
      }),
    })

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' }),
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Form submission failed' }),
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Form submission failed' }),
    }
  }
}
