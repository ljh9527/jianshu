import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const loadMoreListData = (list, nextPage) => ({
    type: 'load_more_data',
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const loadMoreData = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            const action = loadMoreListData(result, page+1);
            dispatch(action);
        })
    }
}

export const toggleTopShow = (show) => ({
	type: 'change_scroll_toggle',
	show
})