import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScrollTop: false,
    writerList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            });
        case 'load_more_data':
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            });
        case 'change_scroll_toggle':
            return state.set('showScrollTop',action.show);
        default:
            return state;
    }
} 