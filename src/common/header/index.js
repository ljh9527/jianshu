import React, { Component } from 'react';
import { connect } from 'react-redux';
import { action } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {

  GetListArea = () => {
    const { focus, list, page, totalPage, mouseIn, changePage, mouseEnter, mouseLeave } = this.props
    const pageList = []
    const newlist = list.toJS()

    if (focus || mouseIn) {

      if (newlist.length) {
        for (let i = (page - 1) * 5; i < page * 5; i++) {
          pageList.push(<SearchInfoItem key={newlist[i]}>{newlist[i]}</SearchInfoItem>)
        }
      }

      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
                  <SearchInfoSwitch onClick={() => changePage(page, totalPage, this.spinIcon)}>
              换一批
                    <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
    else {
      return null;
    }
  }

  render() {
    const { focus, handleFocus, handleBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={focus ? 'focused' : 'blur'}
              onFocus={() => handleFocus(list)}
              onBlur={handleBlur}
            ></NavSearch>
            <i className={focus ? 'focused zoom iconfont' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {
              this.GetListArea()
            }
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus(list) {
      ; (list.size === 0) && (dispatch(action.getList()))
      dispatch(action.search_focus);
    },
    handleBlur() {
      dispatch(action.search_blur);
    },
    changePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        page++
      } else {
        page = 1
      }
      dispatch(action.change_page(page));
    },
    mouseEnter() {
      dispatch(action.mouse_enter);
    },
    mouseLeave() {
      dispatch(action.mouse_leave);
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
