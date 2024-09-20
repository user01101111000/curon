import { getConvertAxiosInstance } from "../axios_instance";

export default async function convert({ amount, baseCurrency, finalCurrency }) {
  const { data } = await getConvertAxiosInstance().get(`/${baseCurrency}`);

  return `${amount} ${baseCurrency} = ${(
    data.conversion_rates[finalCurrency] * amount
  ).toFixed(2)} ${finalCurrency}`;
}
