import { LoaderWrapper } from "@src/components/wrapper/LoaderWrapper"
import { Guards } from "@src/gaurds"

export const AppWrapper = (props) => {
  return (
    <Guards>
      <LoaderWrapper>
        {props.children}
      </LoaderWrapper>
    </Guards>
  )
}