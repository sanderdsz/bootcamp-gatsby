import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "."

export default {
  title: "Teste",
  component: Button,
}

export const teste = () => <Button label="teste" />

