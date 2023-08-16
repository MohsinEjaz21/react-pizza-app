import { GuardsWrapper } from "@src/components/Wrapper/GuardsWrapper"
import { LoaderWrapper } from "@src/components/Wrapper/LoaderWrapper"

const AppWrapper = (props) => {
  return (
    <GuardsWrapper>
      <LoaderWrapper>
        {props.children}
      </LoaderWrapper>
    </GuardsWrapper>
  )
}

export default AppWrapper