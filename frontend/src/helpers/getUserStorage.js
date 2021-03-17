export const getUserStorage = () => {
  return {
    agent: localStorage.getItem('agente') || null,
    desk: localStorage.getItem('escritorio') || null
  }
}