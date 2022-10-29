import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;

    span {
      font-size: ${(props) => props.theme.fontSizes.semiLarge};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      line-height: 24px;
      padding-top: 15px;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      text-align: center;
      font-weight: ${(props) => props.theme.fontWeight.regular};
      font-size: ${(props) => props.theme.fontSizes.normal};
      line-height: 19px;
      padding-bottom: 1rem;

      color: 1px solid ${(props) => props.theme.colors.activeInput};

      text-decoration: none;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }

    a {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-decoration: none;
      color: #5c73db;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  }
`;
