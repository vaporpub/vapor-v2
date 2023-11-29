import { db } from "@/lib/firebase.config";
import { TOrderType, orderSchema } from "@/lib/schema";
import { collection, doc, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useLastOrder = (id: string | null | undefined = undefined) => {
  const [order, setOrder] = useState<TOrderType | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      where("customerId", "==", id),
      limit(1)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setIsEmpty(querySnapshot.empty);
        return;
      } else {
        const d = orderSchema.parse(querySnapshot.docs[0].data());
        console.log("last order here", d);
        setOrder(d);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [id]);

  return { order };
};
