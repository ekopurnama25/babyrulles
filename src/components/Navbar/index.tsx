import "../../styles/fonts/font-fantasy.css";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex sticky top-0 py-1 mx-auto justify-around items-center bg-yellow-400">
        <div className="flex flex-col justify-between items-center max-w-5xl w-full sm:flex sm:flex-row sm:px-12 sm:justify-between">
          <div className="flex justify-center w-full ">
            <div className="p-1 fantasy-text max-[780px]:m-4">
              <h1 className="w-[65x] h-[60px]">BABY RUSSELL</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
