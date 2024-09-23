import sos from '../../public/images/sos.png'

const InfoBlock = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly bg-slate-500 font-sans	 py-36" >
            <div>
                <h1 className="text-6xl font-bold">
                    RemontPro{" "}
                </h1>
                <p className='text-2xl '>
                    Самый масштабный ремонттый центр в Алмате
                </p>
                <button className="px-3 text-m  bg-emerald-600 rounded-3xl text-white text-momo w-52 h-14 my-6 hover:bg-slate-500 border-2 border-emerald-600">
                    Получить консультацию
                </button>
                <button className="px-3 text-m bg-slate-200 text-green-800 rounded-3xl text-white text-momo w-52 h-14 mx-3 my-6 hover:bg-slate-500 border-2 border-slate-200 ">
                    Прибрести дизайн
                </button>
            </div>
            <div><img src={sos} className='hidden sm:block w-80' alt="" /></div>


            <div></div>

        </div>
    );
};


export default InfoBlock;
