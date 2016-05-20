'use strict';

import styles from './style-title.scss'
import React from 'react'

class TitleComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1 className="title-oscar">Hola, soy un componente de react!</h1><hr /><br /><br />
      </div>
    )
  }
}

export default TitleComponent
