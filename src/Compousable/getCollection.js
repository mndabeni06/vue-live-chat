import { ref } from "@vue/reactivity";
import { projectFire } from "../firebase/config";
import { watchEffect } from "@vue/runtime-core";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFire.collection(collection).orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );
  watchEffect((onInvalidate) => {
    // unsub from prev collection
    onInvalidate(() => unsub());
  });
  return { documents, error };
};

export default getCollection;