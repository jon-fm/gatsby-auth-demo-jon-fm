exports.handler = async (event, context) => {
  console.log(`event: ${JSON.stringify(event)}`)
  console.log(`context: ${JSON.stringify(context)}`)

  return ({
    statusCode: 200,
  })
}
