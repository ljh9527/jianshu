import axios from 'axios';

const changeDetail = (title, content) => ({
    type: 'change_detail',
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            const action = changeDetail(result.title, result.content);
            dispatch(action);
        }).catch((err) => {

        })
    }
}