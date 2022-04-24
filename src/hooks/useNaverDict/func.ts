import { NAVER_SUFFIX, NAVER_URL } from "../../const";

type UtterBullshit = any;

async function getSingleWord(wordToRequest: string) {
  const response = await fetch(NAVER_URL + wordToRequest + NAVER_SUFFIX, {
    method: "GET",
    headers: {
      accept: "text/html, */*; q=0.01",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      "alldict-locale": "en",
      referer: "https://en.dict.naver.com/",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "x-requested-with": "XMLHttpRequest",
    },
  });
  return response;
}

function transformRetardedJSON(retardedJSON: UtterBullshit) {
  const queriedWord = retardedJSON.query;

  const resultCategories = retardedJSON.searchResultMap.searchResultListMap;

  const wordResults = resolveWordResultsToSomethingUseable(
    resultCategories["WORD"].items
  );
  // const meaningsResult = resultCategories["MEANING"].items;
  // const exampleResults = resultCategories["EXAMPLE"].items;

  return wordResults;
}

function resolveWordResultsToSomethingUseable(items: UtterBullshit[]) {
  return items.map((item: UtterBullshit) => {
    const meansCollector = item.meansCollector as UtterBullshit[];

    const actualMeanings = meansCollector.map((m: UtterBullshit) => {
      const means = m.means.map((mean: UtterBullshit) => means.value);
      return means;
    });

    return actualMeanings;
  });
}

export { getSingleWord, transformRetardedJSON };
