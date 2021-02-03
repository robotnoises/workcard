import useCardData from '@hooks/useCardData';

const Card = () => {
  const card = useCardData(''); // todo slug

  console.log({ card });

  return (
    <div className="card bg-white rounded shadow-xl"></div>
  );
};

export default Card;
