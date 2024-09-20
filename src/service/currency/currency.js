import { getCurrenciesAxiosInstance } from "../axios_instance";

export default async function getCurrencies() {
  const { data } = await getCurrenciesAxiosInstance().get();
  return data;
}
