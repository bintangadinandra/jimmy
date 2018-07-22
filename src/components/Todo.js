import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, Button } from "react-native";
import styled from "../../node_modules/styled-components";
import { HeadingThree, Small, FormInput } from "./Typography";
import { Flex, Col } from "./Wrappers";
import FaIcon from "./FAIcon";
import Icon from "react-native-vector-icons/FontAwesome";
import Separator from "./Separator";

const TodoWrapper = styled.TouchableHighlight`
  padding: 10px;
  border-top-width: 1px;
  border-top-color: gainsboro;
  background: white;
`;

const TodoTools = styled.TouchableHighlight`
  padding: 8px 10px;
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
    this.state = {
      editMode: false
    };
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    const { editMode } = this.state;
    const { todo, toggleDetail, cascade, toggleEdit } = this.props;
    return (
      <TouchableHighlight
        onPress={toggleDetail}
        style={styles.todoWrapper}
        underlayColor="gainsboro"
      >
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
              <View>
                <Text style={{ marginBottom: 5 }}>{todo.description}</Text>
                <Flex direction="x" justifyContent="flex-start">
                  <Small style={{ width: 70 }}>24 June 2018</Small>
                  <Small style={{ width: 30 }}>8 pts</Small>
                  <Small style={{ width: 50 }}>5 times</Small>
                </Flex>
              </View>
              {editMode ? (
                <View>
                  <FormInput defaultValue={todo.title} />
                  <FormInput defaultValue={todo.description} multiline />
                  <Flex direction="x" justifyContent="flex-end">
                    <Button title="Save" />
                    <Button title="Cancel" onPress={this.toggleEditMode} />
                  </Flex>
                </View>
              ) : (
                <Flex direction="x" justifyContent="flex-end">
                  <TodoTools
                    style={styles.todoToolsButton}
                    onPress={this.toggleEditMode}
                  >
                    <Icon name="pencil" size={20} />
                  </TodoTools>
                  <TodoTools style={styles.todoToolsButton}>
                    <Icon name="trash" size={20} />
                  </TodoTools>
                </Flex>
              )}
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
