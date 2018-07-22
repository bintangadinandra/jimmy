import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, Button } from "react-native";
import styled from "../../node_modules/styled-components";
import { HeadingThree, Small } from "./Typography";
import { Flex, Col } from "./Wrappers";
import FaIcon from "./FAIcon";
import Separator from "./Separator";

const TodoWrapper = styled.TouchableHighlight`
  padding: 10px;
  border-top-width: 1px;
  border-top-color: gainsboro;
  background: white;
`;

const styles = {
  todoWrapper: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "gainsboro",
    backgroundColor: "white"
  }
};

class Todo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, toggleDetail, cascade, toggleEdit } = props;
    return (
      <TouchableHighlight onPress={toggleDetail} style={styles.todoWrapper}>
        <View>
          <Flex direction="x">
            <Col size="1" alignItems="flex-start">
              <HeadingThree style={{ fontFamily: "NunitoSans-Regular" }}>
                {todo.title}
              </HeadingThree>
              {!cascade && <Small>{todo.description}</Small>}
            </Col>
            <FaIcon
              style={{ padding: 10 }}
              name={cascade ? "chevron-up" : "chevron-down"}
              size={18}
            />
          </Flex>
          {cascade && (
            <View>
              <Separator />
              <Text>{todo.description}</Text>
              <Button title="edit" style={{ width: 60 }} onPress={toggleEdit} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleDetail: PropTypes.func,
  cascade: PropTypes.bool
};

export default Todo;
