import { LocationWrapper } from "./LocationWrapper"
import { SuspenseWrapper } from "./SuspenseWrapper"

const AppWrapper = (props) =>{
  return (
    <LocationWrapper>
      <SuspenseWrapper>
        {props.children}
      </SuspenseWrapper>
    </LocationWrapper>
  )
}

export default AppWrapper