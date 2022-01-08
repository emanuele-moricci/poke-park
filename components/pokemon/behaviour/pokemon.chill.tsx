import classNames from 'classnames';

interface IChillProps {
  children: JSX.Element;
  interact: boolean;
}

const Chill = ({ interact, children }: IChillProps): JSX.Element => (
  <div className={classNames({ 'animate-chill': !interact })}>{children}</div>
);

export default Chill;
