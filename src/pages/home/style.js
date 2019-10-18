import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const Download = styled.a`
	margin-bottom: 30px;
	padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	display: inline-block;
	float: left;
	overflow: hidden;
	.download-img{
		width: 60px;
    	height: 60px;
		opacity: .85;	
	}
	.info{
		display: inline-block;
		margin-left: 7px;
		line-height: 25px;
		.title{
			font-size: 15px;
    		color: #333;
		}
		.description{
			margin-top: 4px;
			font-size: 13px;
			color: #999;
		}
	}
`

export const WriterWrapper = styled.ul`
	padding-left: 0;
	margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;

export const WriterItem = styled.li`
	margin-top: 15px;
	line-height: 20px;
	.avatar{
		float: left;
		width: 48px;
		height: 48px;
		margin-right: 10px;
		border: 1px solid #ddd;
    	border-radius: 50%;
	}
	.follow{
		float: right;
		margin-top: 5px;
		padding: 0;
		font-size: 13px;
		color: #42c02e;
	}
	.name{
		padding-top: 5px;
		margin-right: 60px;
		font-size: 14px;
		display: block;
	}
	p{
		margin-top: 2px;
		font-size: 12px;
		color: #969696;
	}
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`