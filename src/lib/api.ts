export async function getQuotes(lang: string): Promise<string[]> {
  //const res = await fetch(`/api/${lang}/quotes.json`)
  const res = await fetch(`https://raw.githubusercontent.com/oxqux/QuoteDrip/refs/heads/quotes/${lang}/quotes.json`)

  if (!res.ok) throw new Error("Failed to connect to the server")

  const data = await res.json()

  if (!Array.isArray(data) || !data.every((el) => typeof el === "string")) {
    throw new Error("Incorrect data format")
  }

  return data
}


export async function getLangs(): Promise<string[]> {
  const res = await fetch("https://raw.githubusercontent.com/oxqux/QuoteDrip/refs/heads/quotes/langs.json")

  if (!res.ok) throw new Error("Failed to connect to the server")

  const data = await res.json()

  if (!Array.isArray(data) || !data.every((el) => typeof el === "string")) {
    throw new Error("Incorrect data format")
  }
  return data
}
