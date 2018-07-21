import React, { PureComponent } from 'react'
import { Button, View, KeyboardAvoidingView } from 'react-native'
import { HeadingOne, FormInput } from '../components/Typography';
import { Container, Flex, Col } from '../components/Wrappers';

class WelcomeModal extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      display: 'none'
    }
  }
  
  render() {
    const { navigation } = this.props
    return (
      <KeyboardAvoidingView
        enabled>
        <Flex
          justifyContent="space-around"
          fullHeight>
          <Col size="2">
            <HeadingOne>Jimmy</HeadingOne>
          </Col>
          <Col
            size="3"
            direction="y"
            fullWidth>
            <View style={{width: '100%', padding: 20}}>
              <FormInput
                placeholder="Email" />
              <FormInput 
                placeholder="Password"
                secureTextEntry/>
              <Button
                title="Login"
                onPress={() => navigation.navigate('Dashboard')}/>
            </View>
          </Col>
        </Flex>
      </KeyboardAvoidingView>
    )
  }
}

export default WelcomeModal