import React from "react"

import "../../../components/organisms/sideNavigation"
import SideNavigation from "../../../components/organisms/sideNavigation"

import Button from '../../../components/atoms/button'

const Docs = () => {
  return <div style={{margin: 8}}>
   <SideNavigation>
     Hello world
   </SideNavigation>
   {/*
   <Button label="Basic" variant="basic" />
    <Button label="Link" variant="link" />
    <Button label="Secondary" variant="secondary" />
    <Button label="Danger" variant="danger" />
    <Button label="Disabled" disabled={true} />
    <Button label="Primary" variant="primary" />
    <Button label="Outline" variant="outline" />
    <Button label="Medium" variant="primary" size="medium" />
    <Button label="Large" variant="outline" size="large" />
   */}
    <div style={{margin: 8}}>
      <Button label="Default" variant="default"/>
    </div>
    <div style={{margin: 8}}>
      <Button label="Primary" variant="primary"/>
    </div>
    <div style={{margin: 8}}>
      <Button label="Warning" variant="warning"/>
    </div>
  </div>
}

export default Docs
