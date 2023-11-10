
const Header = () => {
    return (
        <>
         <div className="flex justify-between p-[30px] bg-[black] text-[white] text-[Inter]">
            <div>
                <h2>COINFLIP</h2>
            </div>
            <div className="flex gap-5"> 
                <h3>Buy/sell</h3>
                <h3>Grow</h3>
                <h3>Markets</h3>
                <h3>Business</h3>
                <h3>Support</h3>
                
            </div>
            <div>
                <button className="border-2 border-[white] h-[40px] w-[96px] rounded-xl mr-[15px]">sign up</button>
                <button className="bg-[#18C8FF] h-[40px] w-[96px] rounded-xl mr-[15px]">sign up</button>
            </div>
        </div>
        </>
    )
}
export default Header; 