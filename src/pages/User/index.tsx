import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "../../components/FirebaseProvider/fireinst";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import style from "./User.module.scss";
import Button from "../../components/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

function User() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  // Go home if no user
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  const { retrieveContent, storeContent } = useLocalStorage("flashmachine");
  const firebaseListCollection = firestore.collection(
    "flashmachine-saved-lists"
  );
  const query = firebaseListCollection.where("user", "==", user?.uid);
  const [userDoc] = useCollectionData(query);

  const setFBList = (list: any) => {
    firebaseListCollection.doc(user?.uid).set({
      user: user?.uid,
      listContent: list,
    });
  };

  const saveList = () => {
    const userLocalList = retrieveContent();
    if (userLocalList && userLocalList.length > 0) {
      console.log("A list is present");

      if (userDoc && userDoc.length > 0) {
        console.log("FB List exists, overwriting...");
        setFBList(userLocalList);
      } else {
        console.log("FB List doesn't exist, creating...");
        setFBList(userLocalList);
      }
    }
  };

  const loadList = () => {
    if (userDoc && userDoc.length > 0) {
      console.log("FB List exists, storing...");
      storeContent(userDoc[0].listContent);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.title}>{user?.displayName}'s Flashmachine</div>
      <div className={style.title}>Word List Options:</div>
      <div className={style.buttons}>
        <Button styling={style.button} onClick={saveList}>
          Save
        </Button>

        <Button styling={style.button} onClick={loadList}>
          Load
        </Button>
      </div>

      <Button styling={style.logOut}>Log Out</Button>
    </div>
  );
}

export default User;
