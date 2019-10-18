import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Download,
    BackTop
} from './style'

class Home extends PureComponent {

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
    
    render() {
        const { showScrollTop } = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            alt='540'
                            className='banner-img'
                            src='//upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'>
                        </img>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Download>
                            <img 
                                alt='Download'
                                className='download-img'
                                src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
                            />
                            <div className='info'>
                                <div className='title'>下载简书手机App</div>
                                <div className='description'>随时随地发现和创作内容</div>
                            </div>
                        </Download>
                        <Writer></Writer>
                    </HomeRight>
                    {
                        showScrollTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                    }
                </HomeWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showScrollTop: state.getIn(['home', 'showScrollTop'])
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapStateToProps, mapDispatch)(Home);