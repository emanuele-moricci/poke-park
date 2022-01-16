import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface IButtonProps {
  classname: string;
  disabled?: boolean;
  onClick: () => void;
  icon: IconDefinition;
}

const Button = ({
  classname,
  disabled,
  onClick,
  icon,
}: IButtonProps): JSX.Element => (
  <button
    className={classNames('absolute top-[2%] z-50', classname)}
    disabled={disabled === true}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default Button;
