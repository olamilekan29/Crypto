import bitcoin from "../assets/image/bitcoin.png"
const Sect2 = () =>{
    return(
        <>
          <div className="grid text-center pt-[30px]">
            <h1 className="text-[Inter]  text-[50px] font-bold text-[center]">A crypto investment platform <br /> that invests in you </h1>
            <h3 className="text-[Inter] text-[16px] text-[400] text-[center] text-[#898CA9]">We invest more resources than any other platrom in making sure great <br/> support from real people is a click away, whenever you need it.</h3>
            <button className="bg-[#18C8FF] h-[40px] w-[96px] rounded-xl ml-[600px] mt-[20px] items-center justify-center">Get started</button>
            {/* <div className="flex ">
             <img src={bitcoin} alt="" />
             <div><h1>24/7 access to full <br /> service customer <br /> support</h1>
             <h3>We invest more resources than any other platform in making sure great <br /> support from real people is a click away, whenever you need it.</h3>
             <button className="bg-[#000] h-[40px] w-[96px] rounded-xl ml-[600px] mt-[20px] items-center justify-center">Get started</button>
             </div>
            </div> */}
          </div>
        </>
    )
};
export default Sect2