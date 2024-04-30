import styled from "styled-components";

export const Container = styled.div `
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodoList = styled.div `
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  ul {
    padding: 0;
    margin-top: 60px;
  }
`;
export const Input = styled.input `
  border: 2px solid rgba(209, 211, 212, 0.8);
  border-radius: 5px;
  height: 40px;
  width: 342px;
  margin-right: 40px;
`;
export const Button = styled.button `
  background: rgba(128, 82, 236, 1);
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 130px;
  height: 40px;
`;

export const ListItem = styled.div `
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(232, 255, 139, 1);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`;