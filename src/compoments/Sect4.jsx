import bag1 from "../assets/image/bag1.png"
const Sect3 = () =>{
    return(
        <>
        <div className="ml-[150px] mt-[70px]">
            <div className="flex">
            <div className="text-left">
                <h1 className="text-[Inter] text-[50px] font-bold text-[left]">Take your first step <br /> into safe, secure <br /> crypto investing</h1>
                <h3 className="text-[Inter] text-[16px] font-thin text-[left] text-[#898CA9]">Separated they live in Bookmarks right at the coast of the famous <br /> Semantics, large language ocean Separated they live in Bookmarks right <br /> at the coast.</h3>
                <button className="bg-[#18C8FF] h-[40px] w-[96px] rounded-xl  mt-[20px] items-center justify-center">Get started</button>
            </div>
            <img src={bag1} alt="" />
            </div>
        </div>
        </>
    )
};
export default Sect3