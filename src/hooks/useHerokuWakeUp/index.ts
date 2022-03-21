import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";

function useGetTranslations() {
  const { data: isAwake, isLoading } = useQuery(
    "flashmachine-definitions",
    async () => {
      try {
        const { data } = await axiosInstance.get("");
        if (data["Flashmachine API status:"] === "Operational") {
          return true;
        }
        return false;
      } catch (e) {
        alert(e);
      }
    }
  );
  return { isAwake, isLoading };
}

export default useGetTranslations;
