import popCorn from '../../public/popcorn.png'
export const imgErrorHandler = (
  ev: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const target = ev.target as HTMLInputElement
  target.src = popCorn
}
