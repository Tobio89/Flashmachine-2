import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth, firestore } from "../../components/FirebaseProvider/fireinst";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Button from "../../components/Button";

import useLocalStorage from "../../hooks/useLocalStorage";

import { setFlashContentsAction } from "../../store/actions/actions";

import { State } from "../../config/types";

import style from "./User.module.scss";

function User() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const dispatch = useDispatch();

  // Go home if no user
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  const { retrieveContent, storeContent } = useLocalStorage("flashmachine");
  const flashContent = useSelector((state: State) => state.flashContent);

  const firebaseListCollection = firestore.collection(
    "flashmachine-saved-lists"
  );
  const query = firebaseListCollection.where("user", "==", user?.uid);
  const [userDoc] = useCollectionData(query);

  const setFireList = (list: any) => {
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
        setFireList(userLocalList);
      } else {
        console.log("FB List doesn't exist, creating...");
        setFireList(userLocalList);
      }
    }
  };

  const loadList = () => {
    if (userDoc && userDoc.length > 0) {
      console.log("FB List exists, storing...");
      storeContent(userDoc[0].listContent);
    }
  };
  const firebaseFlashCollection = firestore.collection(
    "flashmachine-saved-flashcards"
  );
  const flashQuery = firebaseFlashCollection.where("user", "==", user?.uid);
  const [userFlashDoc] = useCollectionData(flashQuery);

  const setFireFlashList = (list: any) => {
    firebaseFlashCollection.doc(user?.uid).set({
      user: user?.uid,
      flashContent: list,
    });
  };

  const saveFlashList = () => {
    if (flashContent && flashContent.length) {
      console.log("Flashcard work is present");

      if (userFlashDoc && userFlashDoc.length) {
        console.log("FB List for flashcards exists, overwriting...");
        setFireFlashList(flashContent);
      } else {
        console.log("FB List for flashcards doesn't exist, creating...");
        setFireFlashList(flashContent);
      }
    }
  };

  const loadFlashList = () => {
    if (userFlashDoc && userFlashDoc.length) {
      console.log("FB List exists, storing...");
      dispatch(setFlashContentsAction(userFlashDoc[0].flashContent));
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
      <div className={style.title}>Meanings Options:</div>
      <div className={style.buttons}>
        {flashContent && flashContent.length ? (
          <Button styling={style.button} onClick={() => saveFlashList()}>
            Save
          </Button>
        ) : (
          <Button styling={style.nobutton}>Save</Button>
        )}

        <Button styling={style.button} onClick={() => loadFlashList()}>
          Load
        </Button>
      </div>

      <Button styling={style.logOut}>Log Out</Button>
    </div>
  );
}

export default User;
