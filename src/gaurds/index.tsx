import PizzaGuard from './PizzaGaurd';
import ToppingsGuard from './ToppingsGuard';

export function Guards({ children }) {
  return (
    <PizzaGuard>
      <ToppingsGuard>
        {children}
      </ToppingsGuard>
    </PizzaGuard>
  )
}
