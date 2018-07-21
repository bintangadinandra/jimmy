import React from 'react';
import { View, Text, Button } from 'react-native';
import { Flex, Col, Container } from './Wrappers';
import { HeadingThree } from './Typography';

export const ApplicationHeader = (props) => {
  const { navigation, title } = props
  return(
    <Container>
      <Flex
        direction="x"
        fullWidth>
        <Button
          title="Sign Out"
          onPress={() => navigation.navigate('Welcome')}/>
        <Col>
          <HeadingThree style={{textAlign: 'center'}}>{title || 'Something'}</HeadingThree>
        </Col>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}/>
      </Flex>
    </Container>
  )
}