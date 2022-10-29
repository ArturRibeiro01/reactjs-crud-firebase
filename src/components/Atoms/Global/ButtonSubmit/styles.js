import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.normalLarge};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  width: ${(props) => props.width || '100%'};

  height: 48px;
  border: none;
  border-radius: 12px;
  line-height: 22px;

  div {
    justify-content: center;
    display: flex;
    gap: 15px;
  }
`;

// .container form .button {
//   width: 520px;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 22px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;
// }
// .container form .button:hover {
//   cursor: pointer;
//   opacity: 0.8;
// }
