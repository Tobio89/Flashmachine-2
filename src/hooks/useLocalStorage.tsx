function useLocalStorage(keyname: string) {
  const storeContent = (content: string[]) => {
    window.localStorage.setItem(
      keyname,
      JSON.stringify({ userContent: content })
    );
  };

  const retrieveContent = () => {
    const dat = window.localStorage.getItem(keyname);
    if (dat) {
      return JSON.parse(dat).userContent;
    } else {
      return null;
    }
  };

  const clearContent = () => {
    window.localStorage.removeItem(keyname);
  };

  return { storeContent, retrieveContent, clearContent };
}

export default useLocalStorage;
