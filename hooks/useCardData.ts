import axios, { AxiosResponse } from 'axios';
import { CardData } from '@models/card';
import { useState } from 'react';

const useCardData = (slug: string): CardData => {
  const [cardData, setCardData] = useState<CardData>(null);

  const get = async () => {
    let result: AxiosResponse;

    try {
      result = await axios.get(`https://workcard.co/.netlify/functions/card-get`); // todo: config, slug /${slug}
    } catch (ex) {
      console.error('Get CardData Error:', ex);
    }

    setCardData(result.data.fields as CardData);
  };

  void get();
  
  return cardData;
};

export default useCardData;
