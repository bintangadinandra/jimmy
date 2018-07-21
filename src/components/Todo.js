import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from '../../node_modules/styled-components';
import { HeadingThree, Small } from './Typography';

const TodoWrapper = styled.View`
  padding: 10px;
  border-top-width: 1px;
  border-top-color: gainsboro;
  background: white;
`

export const Todo = (props) => {
  let {
    todo,
    toggleInput
  } = props;
  return (
    <TodoWrapper>
      <TouchableHighlight
        onPress={toggleInput}
        color="transparent">
        <View>
          <HeadingThree>{todo.title}</HeadingThree>
        </View>
      </TouchableHighlight>
      <Small>{todo.description}</Small>
    </TodoWrapper>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleInput: PropTypes.func
};

export default Todo