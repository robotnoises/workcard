import { useEffect, useState } from 'react';
import { get } from '@gateways/card';
import { CardData } from '@models/card';

export type CardProps = {
  slug: string;
};

const Card = ({ slug }: CardProps) => {
  const [card, setCard] = useState<CardData>(null);

  const getCardData = async (slug: string): Promise<void> => {
    const cardData = await get('');
    setCard(cardData);
  };

  useEffect(() => {
    void getCardData('');
  }, []);

  return (
    <div className="card bg-white rounded shadow-xl">
      <div>{ card && card.firstName }</div>
    </div>
  );
};

export default Card;
