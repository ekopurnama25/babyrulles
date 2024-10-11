import React from "react";
import Layout from "../../components/Layout";
import GUMDAM from "../../@assert/baby-rulles.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <section className="flex justify-around bg-yellow-400">
        <div className="flex mx-auto max-w-5xl min-[800px]">
          <div className="flex flex-row items-center  max-[780px]:w-full mx-auto max-[780px]:flex-col">
            <div className="w-full basis-1/2 max-[780px]mt-8 max-[780px]:p-2">
              <img
                className="w-[780px] h-[400px] mx-auto max-[780px]:w-[220px] min-[780px]:hidden max-[780px]:p-1 max-[780px]:h-[150px] max-[780px]:flex max-[780px]:justify-center"
                src={GUMDAM}
                alt=""
              />
              <h1 className="fantasy-text-menus text-1xl font-bold text-justify max-[780px]:text-[9px] max-[780px]:flex max-[780px]:m-10 max-[780px]:justify-center max-[780px]:text-center  text-[#4b5563]">
                Baby Russell is a puppy who was born from Russell. He loves
                playing with his mother and owner. Baby Russell is also a
                character who is smart in making works such as painting and
                makes everyone happy. He also likes playing throwing balls with
                his other dog friends. .
              </h1>
            </div>
            <div className="place-items-center w-full basis-1/2 max-[780px]:hidden">
              <img
                src={GUMDAM}
                className="w-[780px] h-[400px] x-auto max-[780px]:w-[250px] max-[780px]:h-[250px] max-[780px]:flex max-[780px]:justify-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center bg-yellow-400">
        <div className="flex flex-col">
          <div className="flex justify-around m-4 items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex  items-center max-w-5xl min-[800px] m-4 border-1">
              <div className="flex flex-col w-full rounded-lg bg-red-600 shadow">
                <div className="p-1 fantasy-text text-center items-center m-4">
                  <h1>BABY RULLES </h1>
                </div>
                <div className="text-center m-4">
                  <h1 className="fantasy-text-true text-justify">
                    Currently the baby Russell is on the base network, many
                    people have bought the baby Russell in the development of
                    crypto baby rule is something that can make someone rich in
                    a short time. We have also collaborated with many investors
                    to encourage the baby Russell, come on, what are you up to?
                    This wait will go to the moon in a short time, let's buy
                    baby rules.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-yellow-400">
        <div className="flex flex-col">
          <div className="flex justify-around m-4 items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex  items-center max-w-5xl min-[800px] m-4 border-1">
              <div className="flex flex-row-reverse p-6">
                <div>
                  <div className="pr-2">
                    <Link to="https://t.me/+JAqjBisRghllMjZh">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-telegram "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="pr-2">
                    <Link to="https://x.com/babybaserussell">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-twitter-x "
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-yellow-400">
        <div className="flex flex-col">
          <div className="flex justify-around items-center  mx-auto max-w-5xl min-[800px]">
            <div className="flex flex-col">
              <div className="bg-cyan-800 m-4 h-16 max-[780px]:w-100 rounded-lg text-center items-center justify-center fantasy-text-sosial">
                <p className="mt-5 m-2">
                  <Link to="https://ape.store/base/0x676ae00bac87e96eba2e95fae9f3e54bc7c1c008">
                    BUY APESTORE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
