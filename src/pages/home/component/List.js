import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
    render() {
        const { List, loadMoreData, page } = this.props;
        return (
            <div>
                {
                    List.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                    <img className='pic' src={item.get('imgUrl')} alt='120' />
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => loadMoreData(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        List: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }
};

const mapDispatch = (dispatch) => ({
    loadMoreData(page) {
        dispatch(actionCreators.loadMoreData(page));
    }
});

export default connect(mapStateToProps, mapDispatch)(List);