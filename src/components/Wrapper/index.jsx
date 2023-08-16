import { GuardsWrapper } from "@src/components/Wrapper/GuardsWrapper"
import { LocationWrapper } from "./LocationWrapper"

const AppWrapper = (props) => {
  return (
    <LocationWrapper>
      <GuardsWrapper>
        {props.children}
      </GuardsWrapper>
    </LocationWrapper>
  )
}

export default AppWrapper