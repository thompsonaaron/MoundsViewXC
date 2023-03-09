import Navbar from "../Navbar/Navbar.astro";
import Grant from "../../assets/homepage-image-cropped(2).jpg";

const Layout = (children) => {
  <body class="flex justify-center w-fit">
    <main class="flex flex-col justify-center grow-1">
      <Navbar />
      <img src={Grant} alt="homepage-background" width="vw" height="200px" />

      <div id="background" class="flex-col bg-neutral-700 text-slate-50 pb-16">
        <div class="flex justify-center my-8">
          <div
            class="flex flex-col lg:w-1/2 text-center text-xl items-center"
            style={{ fontFamily: "Quattrocento Sans" }}
          >
            <p class="flex">Nike Cross Nationals (NXN): 2019 (19th), 2018 (17th)</p>
            <br />
            <p class="flex">
              Nike Cross Heartland Regional: 2022 (12th), 2021 (10th), 2019 (1st), 2018 (1st)
            </p>
            <br />
            <p class="flex">
              MSHSL XC: 2022 (5th), 2021 (3rd), 2019 (1st) 2018 (2nd), 2017 (5th), 2016 (4th), 2015
              (9th), 2013 (6th), 2012 (15th), 2011 (14th), 2007 (14th), 2006 (7th), 2004 (9th), 2002
              (10th), 2001 (15th), 2000 (6th), 1999 (2nd)
            </p>
            <br />
            <p class="flex flex-row">
              True Team State Champions: 1998, 1999, 2000, 2001, 2002, 2003, 2006, 2007
            </p>
            <p class="flex flex-row">MSHSL Champions: 1999, 2000, 2001, 2006, 2007</p>
          </div>
        </div>
        {children}
        {/* <div class="flex justify-center m-4"><Carousel /></div> */}
      </div>
    </main>
  </body>;
};

export default Layout;
