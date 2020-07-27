import React from "react"

import "../../../components/organisms/sideNavigation"
import SideNavigation from "../../../components/organisms/sideNavigation"

import DarkModeToogle from "../../../components/atoms/darkModeToggle"

import Button from "../../../components/atoms/button"

const Docs = () => {
  return (
    <div style={{ margin: 8 }}>
      <SideNavigation>Hello world</SideNavigation>
      <DarkModeToogle />
      <div style={{ margin: 8 }}>
        <Button label="Primary" className="button primary" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Information" className="button info" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Success" className="button success" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Warning" className="button warning" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Danger" className="button danger" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Disabled" className="button disabled" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Primary Outline" className="button primary-outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Info Outline" className="button info-outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Success Outline" className="button success-outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Warning Outline" className="button warning-outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Danger Outline" className="button danger-outline" />
      </div>
      <div style={{ margin: 8 }}>
        <Button label="Primary Default" className="button primary-flat" />
      </div>
    </div>
  )
}

export default Docs
