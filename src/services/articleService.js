// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../components/firebaseConfig"
import { collection, query, doc, deleteDoc, getDocs, addDoc, orderBy, limit, Timestamp } from "firebase/firestore"

export async function createArticle({ title, body }) {
  const data = { title, body, date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export function delArticle({ article }) {
  return <button onClick={() => deleteDoc(doc(article.id))}>Delete Article</button>
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}