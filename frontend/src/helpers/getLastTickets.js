
async function getLastTickets() {
  const res = await fetch('https://tickets-server-jasanhdz.herokuapp.com/last')
  const data = await res.json()

  console.log(data)
  return data.last
}

export default getLastTickets
