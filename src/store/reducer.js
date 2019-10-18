import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailreducer } from '../pages/detail/store';
import { reducer as loginreducer } from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailreducer,
    login: loginreducer
})

export default reducer;