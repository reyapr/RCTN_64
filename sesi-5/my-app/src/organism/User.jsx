import React from 'react'
import LabelInfo from '../atoms/LabelInfo'
import InputUsername from '../molecules/InputUsername'

export default class User extends React.Component {
    render() {
      return (
        <>
          <LabelInfo label={'username'} info={this.props.username}/>
          <LabelInfo label={'user-email'} info={this.props.email}/>
          <InputUsername/>
        </>
      )
    }
  }