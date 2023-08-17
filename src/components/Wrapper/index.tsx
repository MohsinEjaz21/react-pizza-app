import { Guards } from "@src/components/Gaurds"
import { LoaderWrapper } from "./LoaderWrapper"
import { ShellWrapper } from "./ShellWrapper"

export const AppWrapper = (props) => {
  return (
    <Guards>
      <ShellWrapper>
        <LoaderWrapper>
          {props.children}
        </LoaderWrapper>
      </ShellWrapper>
    </Guards>
  )
}