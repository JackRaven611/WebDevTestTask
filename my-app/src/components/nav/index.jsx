import styled from "styled-components";

export const StyledNav = styled.nav`
	width: 73%;
	margin: 4rem 0 0 0;

	.search {
	}

	.filters {
		margin: 1rem 0;
		display: flex;
		justify-content: space-between;
		li {
			text-align: left;
			width: 23%;
			display: flex;
			flex-direction: column;
		}
	}

	.counter {
		display: flex;
		margin: 0 0 1rem 0;
	}
`;
