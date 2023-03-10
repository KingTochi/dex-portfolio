import Head from "next/head";
import Image from "next/image";
import { AiFillInstagram, AiFillBehanceSquare } from "react-icons/ai";
import blender from "../public/blender.png";
import figma from "../public/figma.png";
import graphic from "../public/graphic.png";
import work1 from "../public/work1.png";
import work2 from "../public/work2.png";
import work3 from "../public/work3.png";
import work4 from "../public/work4.png";
import work5 from "../public/work5.png";
import work6 from "../public/work6.png";
import coverImg from "../public/pic.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio of a Product Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-5 ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-ClashDisplay">davidajala</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-tl from-orange-500 to-orange-900 text-white px-4 py-2 rounded-md ml-8 font-ClashDisplay"
                  href="#"
                >
                  Resumé
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-ClashDisplay text-orange-500 font-semibold md:text-6xl">
              David Ajala
            </h2>
            <h3 className="text-2xl py-2 font-ClashDisplay md:text-3xl">
              #1 Product Designer
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto ">
              Professional Designer with over 5 years+ of delivering high
              quality designs both in 2D and 3D for clients around the world
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <a href="#">
              {" "}
              <AiFillInstagram />
            </a>
            <a href="#">
              <AiFillBehanceSquare />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-tl from-orange-500 to-orange-900 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={coverImg} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 font-ClashDisplay">
              Services i offer
            </h3>
            <p className="text-md py-2 leading-8">
              Since the beginning of my journey as a freelance product designer,
              I've done remote work for
              <span className="text-orange-500 font-medium"> agencies </span>
              consulted for
              <span className="text-orange-500 font-medium"> startups </span>
              and collaborated with{" "}
              <span className="text-orange-500 font-medium">
                talented people{" "}
              </span>{" "}
              to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8">
              I offer from a wide range of services, including{" "}
              <span className="text-orange-500 font-medium">3D Modelling</span>{" "}
              and{" "}
              <span className="text-orange-500 font-medium">
                Graphics Design
              </span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center drop-shadow-lg my-6 p-10 rounded-xl bg-neutral-900 ">
              <Image
                src={figma}
                width={100}
                height={100}
                alt="3D-Icons"
                className="mx-auto rounded"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-ClashDisplay">
                UI/UX Designs
              </h3>
              <p className="py-2">
                Creating responisve, modern and user friendly designs for web
                and mobile
              </p>
              <h4 className="py-2 text-orange-500">Tools</h4>
              <p className="py-1">Figma</p>
              <p className="py-1">Adobe XD</p>
              <p className="py-1">Zoom</p>
            </div>
            <div className="text-center drop-shadow-lg my-6 p-10 rounded-xl bg-neutral-900 ">
              <Image
                src={blender}
                width={100}
                height={100}
                alt="3D-Icons"
                className="mx-auto rounded"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-ClashDisplay">
                Product Design
              </h3>
              <p className="py-2">
                Creating 3D Designs of products for brands across various niches
              </p>
              <h4 className="py-2 text-orange-500">Tools</h4>
              <p className="py-1">Blender</p>
              <p className="py-1">Photoshop</p>
              <p className="py-1">Illustrator</p>
            </div>
            <div className="text-center drop-shadow-lg p-10 my-6 rounded-xl bg-neutral-900 ">
              <Image
                src={graphic}
                width={100}
                height={100}
                alt="3D-Icons"
                className="mx-auto rounded"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 font-ClashDisplay">
                Graphic Designs
              </h3>
              <p className="py-2">
                Creating visually stunning designs and illustrations for brands
              </p>
              <h4 className="py-2 text-orange-500">Tools</h4>
              <p className="py-1">Photoshop</p>
              <p className="py-1">Illustrator</p>
              <p className="py-1">Adobe</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 font-ClashDisplay">My Portfolio</h3>
            <p className="text-md py-2 leading-8">
              Since the beginning of my journey as a freelance product designer,
              I've done remote work for
              <span className="text-orange-500 font-medium"> agencies </span>
              consulted for
              <span className="text-orange-500 font-medium"> startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8">
              I offer from a wide range of services, including{" "}
              <span className="text-orange-500 font-medium">3D Modelling</span>{" "}
              and{" "}
              <span className="text-orange-500 font-medium">
                Graphics Design
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 border-2 border-orange-500 rounded-lg">
              <Image
                src={work6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <div className="text-center p-2">
          <h4 className="font-ClashDisplay text-gray-700 text-sm">
            David C. Ajala | 2023 | productdesigner
          </h4>
        </div>
      </main>
    </>
  );
}
