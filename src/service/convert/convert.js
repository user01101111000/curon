import { getConvertAxiosInstance } from "../axios_instance";

export default async function convert({ amount, baseCurrency, finalCurrency }) {
  const { data } = await getConvertAxiosInstance().get(
    `/${baseCurrency.value}`
  );

  return `${amount} ${baseCurrency.value} = ${(
    data.conversion_rates[finalCurrency.value] * amount
  ).toFixed(2)} ${finalCurrency.value}`;
}
