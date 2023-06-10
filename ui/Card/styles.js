
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledCarousel = styled(Slider)`
	padding-left: 171px;
	padding-top:40px;
`;

export const Container = styled.div`

	@media (max-width: 767px) {
		padding: 0px;
		margin: 0px 3px 5px 3px;
	}

`;

export const Heading = styled.div`
	font-weight: 500;
	font-size: 20px;
	color: #221f20;
`;

export const Image = styled.img`
	width: 100%;
	height: 180px;
	border-radius: 6px;

	@media (max-width: 767px) {
		display: initial;
	}
`;

export const Wrapper = styled.div`
	padding: 8px 10px;
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SmallImageBox = styled.div`
	position: relative;
	padding: 20px 30px;
	background: #ffffff;
	border-radius: 6px;
	border: 1px solid #e0e0e0;
	&:hover {
		.overlay {
			opacity: 1;
		}
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(34 31 32 / 80%);
		opacity: 0;
		transition: opacity 0.4s ease;

		.hover_text {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			color: #fff;
		}

		.text_name {
			font-size: 17px;
			font-weight: 500;
		}

		.text_no {
			margin-top: 6px;
			text-decoration: underline;
		}
	}

	@media (max-width: 767px) {
		padding: 0;
	}
`;

export const SmallImage = styled.img`
	width: 100%;
	height: 80px;
	border-radius: 6px;
`;

export const CountBox = styled.div`
	border: 1px solid #e0e0e0;
	border-radius: 6px;
	background: #ffffff;
	padding: 6px;
	margin-top: 6px;
`;


