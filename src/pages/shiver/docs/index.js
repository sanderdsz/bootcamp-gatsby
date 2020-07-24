import React from "react"

import "../../../components/organisms/sideNavigation"
import SideNavigation from "../../../components/organisms/sideNavigation"

import Button from "../../../components/atoms/button"

const Docs = () => {
  return (
    <div style={{ margin: 8 }}>
      <SideNavigation>Hello world</SideNavigation>
      <div style={{ margin: 8 }}>
        <Button label="Default" variant="default" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Primary" variant="primary" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Success" variant="success" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Warning" variant="warning" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Danger" variant="danger" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Disabled" variant="disabled" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Default Outline" variant="default—outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Primary Outline" variant="primary—outline" />
      </div>
    </div>
  )
}

export default Docs
