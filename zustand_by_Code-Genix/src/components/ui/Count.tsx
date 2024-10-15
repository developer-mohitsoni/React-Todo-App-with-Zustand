import { useStore } from "@/store/store";

const Count = () => {
  const store = useStore();
  return <div>{store.counter}</div>;
};

export default Count;
