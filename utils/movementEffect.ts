/**
     _____                        .__  __     ._.
    /     \   _______  __ ____    |__|/  |_|  | |
   /  \ /  \ /  _ \  \/ // __ \   |  \   __|  \ |
  /    Y    (  <_> )   /\  ___/   |  ||  |     \|
  \____|__  /\____/ \_/  \___  >  |__||__|     __
          \/                 \/                \/
  
 * This helper file containes a 'styled-components branded' logic to mimic movement
 * when a variable input of 'X | Y' coordinates is passed.
 * 
 */
import styled, { keyframes } from 'styled-components';

interface IMovementEffectProps {
  x: number[];
  y: number[];
  move: number;
}

const getMoveAnimation = (x: number[], y: number[]) => keyframes`
 100% { top: ${y[1]}%; left: ${x[1]}%; }
`;

const Effect = styled.div`
  animation-name: ${({ x, y }: IMovementEffectProps) => getMoveAnimation(x, y)};
  animation-timing-function: ease-in-out;
  animation-duration: ${({ move }: IMovementEffectProps) => move}ms;
  animation-iteration-count: 1;
`;

export default Effect;
