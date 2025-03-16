import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CartContextProvider } from "./context/CartContext"
import { FormCartContextProvider } from "./context/FormCartContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <FormCartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </FormCartContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}

