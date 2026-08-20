import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

interface Instrument {
  name: string;
}

function App() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);

  useEffect(() => {
    async function fetchInstruments() {
      const { data, error } = await supabase.from("instruments").select();

      if (error) {
        console.error(error);
        return;
      }

      if (!data) return;

      setInstruments(data);
    }

    fetchInstruments();
  }, []);

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;
