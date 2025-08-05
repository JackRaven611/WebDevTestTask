import styled from "styled-components";

export const ItemListStyled = styled.section`
	width: 75%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	.item {
		background-color: #ffffff;
		width: 32%;
		display: flex;
		border-radius: 1rem;
		margin-bottom: 2rem;

		ul {
			width: 100%;

			li {
				width: 100%;
			}
			.itemImg {
				overflow: hidden;
				display: flex;
				justify-content: center;
				padding: 3rem 0 1rem 0;
				img {
					max-height: 17rem;
					object-fit: contain;
				}
			}
			.itemName {
				display: flex;
				margin: 0 0 3rem 2rem;
				h2 {
					width: 65%;
					text-align: left;
				}
			}
		}
	}
`;
