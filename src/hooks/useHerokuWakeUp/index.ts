import { useQuery } from "react-query";
import { APIPREFIX } from "../../const";

function useHerokuWakeUp() {
  const { data: isAwake, isLoading } = useQuery(
    "flashmachine-definitions",
    async () => {
      try {
        const response = await fetch(APIPREFIX, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        const data = await response.json();
        alert(data);
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

export default useHerokuWakeUp;
