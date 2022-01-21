const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-1 flex-row justify-center items-center py-4 md:py-8 fixed bottom-0 w-full">
      <p className="pr-2 text-[0.6rem] md:text-lg">Powered by</p>
      <a
        href="https://github.com/emanuele-moricci"
        target="_blank"
        rel="noopener noreferrer"
        className="transition ease-in-out hover:-translate-y-1 hover:text-white text-[0.6rem] md:text-lg"
      >
        @emanuele-moricci
      </a>
    </footer>
  );
};

export default Footer;
