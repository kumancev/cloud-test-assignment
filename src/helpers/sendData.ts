export const sendData = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const responseData = await response.json()
      console.log('Data sent successfully:', responseData)
    } else {
      console.error(
        'Failed to send data:',
        response.status,
        response.statusText
      )
    }
  } catch (error) {
    console.error('Error sending data:', error)
  }
}
