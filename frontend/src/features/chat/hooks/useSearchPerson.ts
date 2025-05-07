import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { auth } from '../../../proto/auth';

export interface PersonData {
  name: string;
  id: string;
  created_at: string;
}

const getPersonData = async (name: string): Promise<PersonData[]> => {
  const token = localStorage.getItem('jwt');

  if (!token) {
    throw new Error('No JWT token found');
  }

  const response = await fetch(`http://localhost:4000/getusers?name=${encodeURIComponent(name)}`, {
    headers: { Authorization: `${token}` }
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('Session expired. Please log in again.');
    }
    throw new Error('Failed to fetch chat rooms.');
  }

  const buffer = await response.arrayBuffer();
  const binary = new Uint8Array(buffer);
  const listDto = auth.AccountListDto.deserializeBinary(binary)
  const protoUsers = listDto.toObject().accounts
  console.log(protoUsers)
  return (protoUsers ?? []).map((u): PersonData => ({
    id: u.id ?? "",
    name: u.name ?? "",
    created_at: u.created_at ?? "",
  }));
};

const useDebouncedValue = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

export const useGetChatRooms = (name: string) => {
  const debouncedName = useDebouncedValue(name, 300);

  return useQuery({
    queryKey: ['chat_rooms', debouncedName],
    queryFn: () => getPersonData(debouncedName),
    enabled: debouncedName.trim() !== '',
  });
};

