import api from "./api";

export interface DataProps {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

// Função para obter dados da API
export const GetData = async () => {
  try {
    const { data } = await api.get<DataProps[] | []>(`/Users`)
    return data;
  } catch (error) {
    return console.log(error);
  }
}

// Função para atualizar dados na API
export const UpdateData = async ({ id, name, lastname, email, phone }: DataProps): Promise<any> => {
  try {
    const formData = { name, lastname, email, phone };
    const { data } = await api.put(`/Users${id}`, formData)
    return data;
  } catch (error) {
    return console.log(error);
  }
}