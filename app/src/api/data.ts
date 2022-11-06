export const getData = async (type: string) => {
  const data = await fetch('http://localhost:3000/entries')
  const dataJSON = await data.json()
  const filter = dataJSON
    .filter((item: Item) => item.programType === type)
    .map((item: Item) => {
      item.images['Poster Art'].height = 200
      item.images['Poster Art'].width = 180
      return item
    })
    .sort((a: Item, b: Item) => (a.title < b.title ? -1 : 1))

  return filter
}
