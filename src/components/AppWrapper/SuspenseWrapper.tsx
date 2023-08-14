import Loader from '@src/components/Globals/Loader';
import { Suspense } from 'react';

export const SuspenseWrapper = (props) => {
  const isLoading = false;
  return (
    <>
      <Loader active={isLoading}/>
      <Suspense fallback={<Loader active={isLoading}/>}>
        {props.children}
      </Suspense>
    </>
  )
}
