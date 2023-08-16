import PizzaGuard from './PizzaGaurd';
import ToppingsGuard from './ToppingsGuard';

export function GuardsWrapper({ children }) {
  return (
    <PizzaGuard>
      <ToppingsGuard>
        {children}
      </ToppingsGuard>
    </PizzaGuard>
  )
}
