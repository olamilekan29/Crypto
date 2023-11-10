import graph1 from "../assets/image/graph1.png"
import arrow from "../assets/image/arrow.png"
const Sect3 = () =>{
    return(
        <>
            <div>
                <div className="grid text-center pt-[30px]">
                    <h1 className="text-[Inter]  text-[45px] font-bold text-[center]">Buy and sell with the lowest <br /> fees in the industry</h1>
                    <h3 className="text-[Inter] text-[16px] text-[400] text-[center] text-[#898CA9]">Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank <br /> transfers or your credit/debit card.</h3>
                    <button className="text-[#B982FF] flex ml-[555px] p-[30px]">Learn More <img src={arrow} alt="" /></button>
                </div>
                <div  className="h-[408px] w-[1080px] bg-[#1A1B23] ml-[150px] rounded-2xl">
                    <span className="flex justify-between items-center px-[50px] py-[10px] border-b border-[#2B2C3B] ">
                        <h1 className="text-[white]">Bitcoin</h1>
                        <h2 className="text-[#B982FF]">BTC</h2>
                        <h3 className="text-[white]">$56,290.30</h3>
                        <h4 className="text-[#0DBB7C]">+1.68%</h4>
                        <img src={graph1} alt="" />
                        <button className="text-[#B982FF] flex ml-[55px] ">Trade Now <img src={arrow} alt="" /></button>
                    </span>

                    <span className="flex justify-between items-center px-[50px] py-[10px] border-b border-[#2B2C3B]">
                        <h1 className="text-[white]">Ethereum</h1>
                        <h2 className="text-[#B982FF]">ETH</h2>
                        <h3 className="text-[white]">$4,284.81</h3>
                        <h4 className="text-[#0DBB7C]">+4.36%</h4>
                        <img src={graph1} alt="" />
                        <button className="text-[#B982FF] flex ml-[55px] ">Trade Now <img src={arrow} alt="" /></button>
                    </span>

                    <span className="flex justify-between items-center px-[50px] py-[10px] border-b border-[#2B2C3B]">
                        <h1 className="text-[white]">Cardano</h1>
                        <h2 className="text-[#B982FF]">ADA</h2>
                        <h3 className="text-[white]">$1.88</h3>
                        <h4 className="text-[#0DBB7C]">+3.43%</h4>
                        <img src={graph1} alt="" />
                        <button className="text-[#B982FF] flex ml-[55px] ">Trade Now <img src={arrow} alt="" /></button>
                    </span>

                    <span className="flex justify-between items-center px-[50px] py-[10px] border-b border-[#2B2C3B]">
                        <h1 className="text-[white]">WAX</h1>
                        <h2 className="text-[#B982FF]">WAXP</h2>
                        <h3 className="text-[white]">$0.97</h3>
                        <h4 className="text-[#FF8282]">-2.62%</h4>
                        <img src={graph1} alt="" />
                        <button className="text-[#B982FF] flex ml-[55px] ">Trade Now <img src={arrow} alt="" /></button>
                    </span>

                    <span className="flex justify-between items-center px-[50px] py-[10px] ">
                        <h1 className="text-[white]">PALKDOT</h1>
                        <h2 className="text-[#B982FF]">DOT</h2>
                        <h3 className="text-[white]">$56,290.30</h3>
                        <h4 className="text-[#0DBB7C]">+7.56%</h4>
                        <img src={graph1} alt="" />
                        <button className="text-[#B982FF] flex ml-[55px] ">Trade Now <img src={arrow} alt="" /></button>
                    </span>
                </div>
            </div>
        </>
    )
};
export default Sect3