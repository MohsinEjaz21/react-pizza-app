import { Suspense } from 'react';
import Loader from './Loader';

export const Loading = ({ isLoading, children }) => {
  return (
    <>
      <Loader active={isLoading} />
      <Suspense fallback={<Loader active={isLoading} />}>
        {children}
      </Suspense>
    </>
  )
}
