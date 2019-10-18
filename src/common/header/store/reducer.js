import { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'search_focus':
            return state.set('focus', true)
        case 'search_blur':
            return state.set('focus', false)
        case 'change_list':
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case 'change_page':
            return state.set('page', action.page)
        case 'mouse_enter':
            return state.set('mouseIn', true)
        case 'mouse_leave':
            return state.set('mouseIn', false)
        default:
            return state
    }
} 