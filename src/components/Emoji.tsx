
interface Props{
    rating : number;
}

const Emoji = ({rating} :Props) => {
    if (rating < 3) return null;
  return (
    <div>Emoji</div>
  )
}

export default Emoji