import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  label {
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    line-height: 19px;
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    width: 520px;
    height: 49px;
    border: 1px solid ${(props) => props.theme.colors.borderInput};
    border-radius: 12px;
    margin-bottom: 1rem;
    transition: 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.activeInput};
    }

    ::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }
  }
`;
