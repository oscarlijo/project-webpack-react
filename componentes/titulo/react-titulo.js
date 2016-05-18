'use strict';

import styles from './style-titulo.scss';
import React from 'react'

class MyComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1 className="titulo-oscar">Hola, soy un componente de react!</h1><hr /><br /><br />
      </div>
    )
  }
}

export default MyComponent
