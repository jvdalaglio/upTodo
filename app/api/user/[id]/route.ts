import { NextResponse } from 'next/server';
import { db } from '../../../../config/firebase'; // Ajuste o caminho se necessário
import { doc, getDoc } from 'firebase/firestore';

// Função para buscar um usuário pelo ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const userId = params.id; // Obtendo o ID do parâmetro da rota

  try {
    // Referência ao documento pelo ID
    const docRef = doc(db, 'users', userId);
    const docSnapshot = await getDoc(docRef);

    // Verificando se o documento existe
    if (docSnapshot.exists()) {
      const data = {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      };
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 });
    }
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return NextResponse.error();
  }
}