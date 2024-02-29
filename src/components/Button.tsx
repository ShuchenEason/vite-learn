import React, { useEffect } from 'react'
import { Button as DripButton } from '@drip/drip-design'

const Button = (props: any) => {
  console.log('props', props)
  useEffect(() => {
    console.log('props', props)
  }, [props])
  
  return <DripButton {...props}>{props.children || props.label}</DripButton>
}
export default Button