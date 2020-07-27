import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "../src/components/atoms/button"

export default {
  title: "Teste",
  component: Button,
}

export const teste = () => <Button label="teste" className="button default" />
