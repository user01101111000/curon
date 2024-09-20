import { useMutation } from "@tanstack/react-query";
import convert from "../../service/convert/convert";

export default function useGetConvertQuery() {
  return useMutation({
    mutationFn: (data) => convert(data),
  });
}
