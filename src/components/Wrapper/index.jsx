import { Guards } from "@src/components/Gaurds"
import { LoaderWrapper } from "@src/components/Wrapper/LoaderWrapper"

export const AppWrapper = (props) => {
  return (
    <Guards>
      <LoaderWrapper>
        {props.children}
      </LoaderWrapper>
    </Guards>
  )
}