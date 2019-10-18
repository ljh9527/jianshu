import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends PureComponent {
    render() {
        const { writerList } = this.props;
        return (
            <WriterWrapper>
                {
                    writerList.map((item, index) => {
                        return (<WriterItem key={index}>
                            <img className='avatar' alt='1' src={item.get('imgUrl')} />
                            <div className='follow'>关注</div>
                            <a className='name'>{item.get('name')}</a>
                            <p>{item.get('description')}</p>
                        </WriterItem>)
                    })
                }
                
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
}

export default connect(mapStateToProps, null)(Writer);