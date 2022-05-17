import React, { useEffect, useState } from 'react';
import * as Styles from './styles';

import MaterialTable from '@material-table/core';
import { GetData, UpdateData, DataProps } from '../../services/data';

import TableIcons from './tableIcons';

const Table = () => {
  const [columns, setColumns] = useState([
    {
      title: "Nome",
      field: "name",
    },
    {
      title: "Sobrenome",
      field: "lastname",
    },
    {
      name: "E-mail",
      field: "email",
    },
    {
      name: "Telefone",
      field: "phone",
    }
  ])

  const [data, setData] = useState<DataProps[] | []>([]);

  // Função para obter dados da API
  const loadData = async () => {
    const response = await GetData();
    setData(response ?? []);
  }

  // Effect para executar a consulta de dados na API assim que a página for carregada
  useEffect(() => {
    void loadData();
  }, []);

  return (
    <Styles.Container>
      <MaterialTable
        title="Exemplo de consulta de dados da API"
        icons={TableIcons}
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex: -1,
          searchFieldStyle: {
            backgroundColor: 'lightblue',
            padding: 5,
          },
          rowStyle: {
            backgroundColor: 'lightblue',
          },
          headerStyle: {
            backgroundColor: 'darkblue',
            color: 'white',
          },
        }}
        editable={{
          // REMOVA ESTE COMENTÁRIO PARA HABILITAR INCLUSÃO DE DADOS NA TABELA
          // onRowAdd: (newData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       setData([...data, newData]);

          //       resolve();
          //     }, 1000);
          //   }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.id;
                dataUpdate[index - 1] = newData;
                setData([...dataUpdate]);

                // Função async para enviar score atualizado na API via put
                const submit = async (data: DataProps) => {
                  try {
                    await UpdateData(data);
                  } catch (error: any) {
                    console.log('Deu um erro:', error);
                  }
                }

                // Executar função async
                submit(newData);

                resolve(newData);
              }, 1000);
            }),
          // REMOVA ESTE COMENTÁRIO PARA HABILITAR EXCLUSÃO DE DADOS NA TABELA
          // onRowDelete: (oldData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const dataDelete = [...data];
          //       const index = oldData.tableData.id;
          //       dataDelete.splice(index, 1);
          //       setData([...dataDelete]);

          //       resolve();
          //     }, 1000);
          //   })
        }}
      />
    </Styles.Container>
  )
}

export default Table;