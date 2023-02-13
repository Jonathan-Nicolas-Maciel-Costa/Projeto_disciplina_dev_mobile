import { Api } from "../apiConfig";


const getALL = async () => { 
    const {data} = await Api().get('/user');
    return data;
};
const getById = async (id) => { 
    const {data} = await Api().get('/user/'+String({id}));
    return data;
};
const create = async (dataToCreate) => { 
    const {data} = await Api().post('/user', dataToCreate);
    return data;
};
const updateById = async (id, dataToUpdate) => { 
    const {data} = Api().put('/user/'+id, dataToUpdate);
    return data;
};
const deleteById = () => { };

export const TarefaService = {
    getALL,
    getById,
    create,
    updateById,
    deleteById,
}