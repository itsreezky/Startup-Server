// api.js
import axios from 'axios';

const proxyUrl = 'https://api.allorigins.win/raw?url=';

export const AddVisitor = () => {
    const AddVisitor = 'https://visitor.api.akuari.my.id/umum/view/tambah?id=itsreezky.my.id';
    return axios.get(proxyUrl + AddVisitor);
};

export const CountVisitor = () => {
    const CountVisitor = 'https://visitor.api.akuari.my.id/umum/view?id=itsreezky.my.id';
    return axios.get(proxyUrl + CountVisitor);
};
