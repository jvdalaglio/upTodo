// /app/page.tsx (ou onde estiver seu componente Home)

'use client';

import { useState, useEffect, useCallback } from 'react';

interface User {
  age: number;
  email: string;
  name: string;
  phone: string;
}

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setData] = useState<User | null>(null); // Inicializa como null

  const getUserData = useCallback(async () => {
    if (!userId) return; // Verifica se userId é null antes de fazer a requisição

    try {
      const response = await fetch(`/api/user/${userId}`); // Faz a chamada com o userId
      if (!response.ok) {
        throw new Error('Erro ao buscar dados: ' + response.statusText);
      }
      const data = await response.json();
      console.log('data', data);
      setData(data); // Define os dados do usuário
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [userId]); // Adiciona userId como dependência

  useEffect(() => {
    const getUserId = () => {
      const userData = sessionStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUserId(parsedUser.uid); // Define o userId
        console.log('userId', parsedUser.uid);
      } else {
        setUserId(null);
      }
    };

    getUserId();
  }, []); // Removido getUserData das dependências

  useEffect(() => {
    getUserData(); // Chama a função de buscar dados sempre que userId mudar
  }, [getUserData]);

  return (
    <div>
      {userData ? (
        <>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Age: {userData.age}</p>
        </>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
}
