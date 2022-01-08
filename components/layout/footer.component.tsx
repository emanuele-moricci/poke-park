const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-1 flex-row justify-center items-center py-8 fixed bottom-0 w-full">
      <p className="pr-2">Powered by</p>
      <a
        href="https://github.com/emanuele-moricci"
        target="_blank"
        rel="noopener noreferrer"
        className="transition ease-in-out hover:-translate-y-1 hover:text-white"
      >
        @emanuele-moricci
      </a>
    </footer>
  );
};

export default Footer;
