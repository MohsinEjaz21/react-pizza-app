import { CSSTransition } from "react-transition-group";
import './drop.animation.module.scss';

export const DropAnimation = ({ inAnim, children }) => {
  return (
    <CSSTransition in={inAnim} timeout={3000} classNames={{
      enter: 'drop-enter',
      enterActive: 'drop-enter-active',
      exit: 'drop-exit',
      exitActive: 'drop-exit-active',
    }} unmountOnExit>
      {(state) => (
        <div className={`drop-container drop-${state}`}>
          {children}
        </div>
      )}
    </CSSTransition>
  );
};
