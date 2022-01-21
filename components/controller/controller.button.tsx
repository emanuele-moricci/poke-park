import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonProps {
  disabled?: boolean;
  onClick: () => void;
  icon: IconDefinition;
}

const Button = ({ disabled, onClick, icon }: IButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled === true}
      onClick={onClick}
      aria-label={icon.iconName}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Button;
