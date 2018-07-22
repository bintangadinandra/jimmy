import styled from "styled-components";

export const Container = styled.View`
  padding: 0px 8px;
  flex: 1;
`;

export const BaseView = styled.View`
  width: ${props => (props.fullWidth ? "100%" : "auto")};
`;

export const Flex = styled.View`
  display: flex;
  flex-direction: ${props => (props.direction === "x" ? "row" : "column")};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  ${props => (props.fullHeight ? "height: 100%" : "")};
  ${props => (props.fullWidth ? "width: 100%" : "")};
  ${props => (props.debug ? "border: 1px solid red" : "")};
`;

export const Col = Flex.extend`
  flex: ${props => props.size || "1"};
`;

export const ContainerScroll = styled.ScrollView`
  padding: 0px 8px;
`;
