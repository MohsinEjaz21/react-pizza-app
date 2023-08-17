import { Guards } from "@src/components/Gaurds"
import { LoaderWrapper } from "./LoaderWrapper"
import { ShellWrapper } from "./ShellWrapper"

export const AppWrapper = (props) => {
  return (
    <ShellWrapper>
      <Guards>
        <LoaderWrapper>
          {props.children}
        </LoaderWrapper>
      </Guards>
    </ShellWrapper>
  )
}