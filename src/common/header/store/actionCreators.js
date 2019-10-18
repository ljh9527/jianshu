import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: 'change_list',
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
})

export const search_focus = {
    type: 'search_focus'
}

export const search_blur = {
    type: 'search_blur'
}

export const change_page = (page) => ({
    type: 'change_page',
    page
})

export const mouse_enter = {
    type: 'mouse_enter'
}

export const mouse_leave = {
    type: 'mouse_leave'
}

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const { data } = res;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error')
        });
    }
}