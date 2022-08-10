const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export interface BankRate {
  ccy: string,
  buy: string,
  sale: string,
  [key: string]: string,
}

export const getCouresesCurrencies = async (): Promise<BankRate[]> => {
  const response = await fetch(`${API_URL}`, { method: 'GET' });

  const result = await response.json()
    .catch((error) => {
      throw Error(`${error}`);
    });

  return result;
};

// const request = async (options: {}) => {
//   const response = await fetch(`${API_URL}`, options);

//   const result = await response.json()
//     .catch((error) => {
//       throw Error(`${error}`);
//     });

//   return result;
// };

// export const getCouresesCurrencies = async (): Promise<BankRate[]> => {
//   const result = await request({ method: 'GET' });

//   return result;
// };
