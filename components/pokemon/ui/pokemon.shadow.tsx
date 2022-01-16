import classNames from 'classnames';

interface IShadowProps {
  interact: boolean;
  children: JSX.Element;
}

const PokemonShadow = ({ interact, children }: IShadowProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      {children}
      <div
        className={classNames(
          'w-10 h-10 bg-black rounded-full skew-x-[60deg] -mt-[30px] -z-10',
          { 'animate-shadow': !interact, 'animate-shadow-interact': interact }
        )}
      ></div>
    </div>
  );
};

export default PokemonShadow;
