import axios from 'axios'

const changeLogin = () => ({
	type: 'change_login',
	value: true
})

export const logout = () => ({
	type: 'change_logout',
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}