import { persistor } from "./store";

export const clearPersistedData = async () => {
  try {
    await persistor.purge();
    console.log('Persisted Redux state cleared.');
  } catch (err) {
    console.error('Failed to purge persisted state', err);
  }
};
