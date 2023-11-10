import trade from "../assets/image/trade.png"
import atm from "../assets/image/atm.png"
import wallet from "../assets/image/wallet.png"
import arrow from "../assets/image/arrow.png"

const Sect1 = () =>{
    return(
        <>
        <div className="grid items-center justify-center">
          <div className="grid"> <h1 className="text-[Inter] text-[85px] font-bold text-center pt-[50px] ">We make crypto <br /> clear and simple</h1>
            <h3 className="text-[Inter] text-[16px] text-[#898CA9] font-[semibold] text-center">Buy, sell, and grow your crypto with CoinFlip, the platform dedicated <br /> to every trader at every level.</h3>
            <button className="bg-[#18C8FF] h-[40px] w-[96px] rounded-xl ml-[450px] mt-[20px] items-center justify-center">Get started</button>
        </div> 
            <div className="flex my-[40px] ">
              <div className="bg-[#1A1B23] rounded-2xl grid text-center items-center justify-center w-[300px] h-[250px] mr-[50px]">
              <img className="ml-[70px]" src={trade} alt="" />
              <h2 className="text-[white]">Trade Desk</h2>
              <h3 className="text-[#898CA9]">Invest in crypto anytime, anywhere <br /> with our safe, secure, and easy to <br /> use online platform</h3> 
              <button className="text-[#B982FF] flex ml-[55px] ">Get started <img src={arrow} alt="" /></button> 
            </div>
            
            <div className="bg-[#1A1B23] rounded-2xl grid text-center items-center justify-center w-[300px] h-[250px] mr-[50px] ">
              <img className="ml-[70px]" src={atm} alt="" />
              <h2 className="text-[white]">CoinFlip ATMs</h2>
              <h3 className="text-[#898CA9]">We have thousands of ATMs located <br /> across the U.S. where you can easily <br /> convert cash to crypto</h3> 
              <button className="text-[#B982FF] flex ml-[55px]">Get started <img src={arrow} alt="" /></button> 
            </div>

            <div className="bg-[#1A1B23] rounded-2xl grid text-center items-center justify-center w-[300px] h-[250px]">
              <img className="ml-[70px]" src={wallet} alt="" />
              <h2 className="text-[white]">CoinFlip Wallet</h2>
              <h3 className="text-[#898CA9]">Store your growing investments in our <br /> non-custodial wallet that gives you access <br /> to a full suite of DeFi services in one place</h3> 
              <button className="text-[#B982FF] flex ml-[55px]">Get started <img src={arrow} alt="" /></button> 
            </div>
        </div>

        
        
        
        
        
        </div>
        </>
    )
};
export default Sect1