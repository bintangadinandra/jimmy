import styled from "styled-components";
const BaseFont = "NunitoSans-Regular";

export const HeadingOne = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0px 10px;
`;

export const HeadingTwo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0 7.5px;
`;

export const HeadingThree = styled.Text`
  font-size: 18px;
  margin: 5px 0 3px;
`;

export const Small = styled.Text`
  font-size: 10px;
`;

export const FormInput = styled.TextInput`
  border: 1px solid gainsboro;
  padding: 8px 16px;
  margin: 4px 0px;
  border-radius: 5;
`;

export const NakedButton = styled.Button`
  background-color: red;
  box-shadow: none;
`;
