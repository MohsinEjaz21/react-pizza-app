import { LocationWrapper } from "./LocationWrapper"

const AppWrapper = (props) => {
  return (
    <LocationWrapper>
      {props.children}
    </LocationWrapper>
  )
}

export default AppWrapper