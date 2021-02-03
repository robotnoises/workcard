import axios, { AxiosResponse } from 'axios';
import { CardData } from '@models/card';

const useCardData = async (slug: string): Promise<CardData> => {
  let result: AxiosResponse;
  
  try {
    result = await axios.get(`https://workcard.co/.netlify/functions/card-get`); // todo: config, slug /${slug}
  } catch (ex) {
    console.error('Get CardData Error:', ex);
    // todo: return error?
  }
  
  return result.data.fields as CardData;
};

export default useCardData;
