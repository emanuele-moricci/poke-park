import styled from 'styled-components';

import Sprite from './Sprite';

interface ISpriteContainerProps extends IMovementProps {
  sprite: string;
  flip: string;
}

interface IMovementProps {
  startX: number;
  startY: number;
}

const SpriteContainer = ({
  startX,
  startY,
  sprite,
  flip,
}: ISpriteContainerProps): JSX.Element => {
  return (
    <StyledSpriteContainer className="absolute" startY={startY} startX={startX}>
      <div className="animate-chill">
        <Sprite sprite={sprite} alt={sprite} flip={flip} />
      </div>
    </StyledSpriteContainer>
  );
};

const StyledSpriteContainer = styled.div`
  position: absolute;
  top: ${({ startY }: IMovementProps): string => `${startY}%`};
  left: ${({ startX }: IMovementProps): string => `${startX}%`};
`;

export default SpriteContainer;
