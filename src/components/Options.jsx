import { useEffect } from "react"; 
import { useState } from "react"; 
 
const Options = ({setInfoFromOptions}) => { 
    const [dishType, setDishType] = useState(""); 
    const [typeOfFood, setTypeOfFood] = useState(""); 
    const [cuisine, setCuisine] = useState(""); 
    const [fastFoodType, setFastFoodType] = useState(""); 
    const [bonusIngredients, setBonusIngredients] = useState(""); 
    const [banIngredients, setBanIngredients] = useState(""); 
 
 
    
    return ( 
        <div className="mx-auto p-4 mt-4 bg-gray-500 w-[70%] mb-10 border-2 border-sky-700 h-[400px] rounded-3xl flex flex-col items-center"> 
            <div className="text-3xl font-bold">Options</div> 
            <p>Lorem, ipsum dolor.</p> 
 
            <div className="flex gap-10 mt-10"> 
                <div> 
                    <div className="flex flex-col"> 
                        <label>Выбери высоту комнаты</label> 
                        <select 
                            name="dish" 
                            id="dish" 
                            onChange={(e) => setDishType(e.target.value)} 
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2" 
                        > 
                            <option value="2м">2м</option> 
                            <option value="3м">3м</option> 
                            <option value="3,5м">3,5м</option> 
                            <option value="4м">4м</option> 
                        </select> 
                    </div> 
 
                    <div className="flex flex-col"> 
                        <label>Цвет комнаты</label> 
                        <select 
                            name="cuisine" 
                            id="cuisine" 
                            onChange={(e) => setCuisine(e.target.value)} 
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2" 
                        > 
                            <option value="черный"> 
                                черный 
                            </option> 
                            <option value="серый"> 
                                серый 
                            </option> 
                            <option value="розовый"> 
                                розовый
                            </option> 
                            <option value="или другое.."> 
                                или другое..
                            </option> 
                        </select> 
                    </div> 
                </div> 
                <div> 
                    <div> 
                        <p>кв/m2</p> 
                        <select className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"> 
                            <option>60/70m2</option> 
                            <option>80/90m2</option> 
                            <option>90/110m2</option> 
                            <option>110/160m2</option> 
                        </select> 
                    </div> 
<div> 
                        <p>Дизайн комнаты</p> 
                        <select 
                            onChange={(e) => setFastFoodType(e.target.value)} 
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2" 
                        > 
                            <option>совремменый</option> 
                            <option>детский</option> 
                            <option>Италиянский</option> 
                            <option>Европейский</option> 
                        </select> 
                    </div> 
                </div>
                <div> 
                    <div> 
                        <p>для скольких людей?</p> 
                        <input 
                            onChange={(e) => 
                                setBonusIngredients(e.target.value) 
                            } 
                            placeholder="для скольких людей?" 
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black " 
                        /> 
                    </div> 
 
                    <div> 
                        <p>сколько туалетов?</p> 
                        <input 
                            onChange={(e) => setBanIngredients(e.target.value)} 
                            placeholder="сколько туалетов?" 
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black " 
                        /> 
                    </div> 
                </div> 
            </div> 
            <div className="flex gap-3 flex-wrap mt-10 w-[80%]"> 
                <p>selected dish type: <span className="text-orange-500 font-bold">{dishType}</span></p> 
                <p>selected cuisine: <span className="text-orange-500 font-bold">{cuisine}</span></p> 
                <p>selected fastFoodType: <span className="text-orange-500 font-bold">{fastFoodType}</span></p> 
                <p>selected typeOfFood: <span className="text-orange-500 font-bold">{typeOfFood}</span></p> 
                <p>selected bonusIngredients: <span className="text-orange-500 font-bold">{bonusIngredients}</span></p> 
                <p>selected banIngredients: <span className="text-orange-500 font-bold">{banIngredients}</span></p> 
            </div> 
        </div> 
    ); 
}; 
 
export default Options;