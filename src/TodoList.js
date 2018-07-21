import React, { PureComponent } from 'react'
import { Text, Button, ScrollView } from 'react-native'
import Todo from './components/Todo'
import { HeadingTwo } from './components/Typography';

class TodoList extends PureComponent {
  static navigationOptions = {
    title: 'Todo List',
  }

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: '1',
          title: 'Study React Native Basics',
          description: 'Master React Native Components and Best Practices'
        },
        {
          id: '2',
          title: 'Study Sketch',
          description: 'Master Basic UI Pattern and Small Stuff'
        },
        {
          id: '3',
          title: 'Connect to localhost',
          description: 'Manage Create local API and perform API call with react native'
        },
        {
          id: '4',
          title: 'Connect to localhost',
          description: 'Manage Create local API and perform API call with react native'
        },
        {
          id: '5',
          title: 'Connect to localhost',
          description: 'Manage Create local API and perform API call with react native'
        },
        {
          id: '6',
          title: 'Connect to localhost',
          description: 'Manage Create local API and perform API call with react native'
        },
        {
          id: '7',
          title: 'Connect to localhost',
          description: 'Manage Create local API and perform API call with react native'
        }
      ],
    }
  }

  toggleInput = (e) => {
    
  }

  render () {
    const {todos, text} = this.state
    const { navigation } = this.props
    return (
      <ScrollView
        style={{width: '100%'}}>
        {
          todos.map(todo => 
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            toggleInput={this.toggleInput}/>
          )
        }
      </ScrollView>
    )
  }
}



export default TodoList