import { useLocation } from 'react-router';

export const LocationWrapper = (props) =>{
  const location = useLocation();
  // console.log(location.pathname)

  return (
    <>
      {props.children}
    </>
  )
}
