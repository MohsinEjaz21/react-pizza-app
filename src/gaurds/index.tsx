import { PizzaGuard } from './PizzaGuard';
import { ToppingsGuard } from './ToppingsGuard';

export function Guards({ children }) {
  return (
    <PizzaGuard>
      <ToppingsGuard>
        {children}
      </ToppingsGuard>
    </PizzaGuard>
  )
}
