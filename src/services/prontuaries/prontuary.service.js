
export async function getProntuariesById(user_id) {
  const response = await fetch(`http://localhost:3336/prontuary?user_id=${user_id}`, {
    method: 'GET',
  })
  const json_data = await response.json()
  console.log(json_data)
  return json_data
}
