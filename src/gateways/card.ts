import axios, { AxiosResponse } from 'axios';
import { CardData } from '@models/card';

export const get = async (slug: string): Promise<CardData> => {
  let result: AxiosResponse;

  try {
    result = await axios.get(`https://workcard.co/.netlify/functions/card-get`); // todo: config, slug /${slug}
  } catch (ex) {
    console.error('Get CardData Error:', ex);
  }

  return result.data.fields as CardData;
};
