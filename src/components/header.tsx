import { GithubIcon } from "./icon";

function Header() {
  return (
    <header className='my-8 flex flex-col items-center'>
      <h1 className='font-black text-4xl text-white'>Next Station?</h1>
      <p className='text-lg text-neutral-400'>
        AI will pick the top destinations for you!
      </p>
    </header>
  );
}

export default Header;
