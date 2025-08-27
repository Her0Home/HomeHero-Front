import { getAvailability } from "@/services/appointments";
import { useState } from "react";

interface AbilityProps {
  professionalId: string;
  date: string;
  token: string;
}

export function useAvailability({professionalId, token, date} : AbilityProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAvailability = async () => {
    try {
      setLoading(true);
      const response = await getAvailability(professionalId, date, token)

      setAvailableSlots(response.slots || []);
    } catch (error) {
      console.error("Error fetching availability", error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  return { availableSlots, loading, fetchAvailability };    
}
