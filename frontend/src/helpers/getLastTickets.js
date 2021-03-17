
async function getLastTickets() {
  const res = await fetch('http://localhost:8080/last')
  const data = await res.json()

  console.log(data)
  return data.last
}

export default getLastTickets
