import { Guards } from "@src/components/Guards/Guards"
import { LoaderWrapper } from "@src/components/Wrapper/LoaderWrapper"
import { UIShellWrapper } from "@src/components/Wrapper/UIShellWrapper"

export const AppWrapper = (props) => {
  return (
    <UIShellWrapper>
      <Guards>
        <LoaderWrapper>
          {props.children}
        </LoaderWrapper>
      </Guards>
    </UIShellWrapper>
  )
}