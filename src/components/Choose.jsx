import React, { useState } from "react"; 
import Ingredient from "./Ingredient"; 
import Options from "./Options"; 
import Footer from "./Footer";
 
const Choose = () => { 
     
    const apikey = import.meta.env.VITE_API_KEY; 
    const apiurl = import.meta.env.VITE_API_URL; 
     
    const [infoFromOptions ,setInfoFromOptions] = useState(); 
 
    const [gptPromptText, setGptPromptText] = useState([]); 
 
    const [imageUrl, setImageUrl] = useState('') 
    // const imageUrl ='' 
    const ingredientsData = [ 
        { name: "wardrobe", imageSrc: "/images/shkaf.png" }, 
        { name: "curtains", imageSrc: "/images/shtora.png" }, 
        { name: "sofa", imageSrc: "/images/png.png" }, 
        { name: "padded stool", imageSrc: "/images/png5.png" }, 
        { name: "", imageSrc: "/images/tumba.png" }, 
        { name: "carpet", imageSrc: "/images/gpt3.png" }, 
        { name: "sofa", imageSrc: "/images/png1.png" }, 
        { name: "padded stool", imageSrc: "/images/pk.png" }, 
    ]; 
 
    const createPromptText = () => { 
        let text = 'Generate breakfast using these ingredients: ' + gptPromptText.toString() +'other setting' + infoFromOptions;  
        console.log('promt text: ', text) 
        return text; 
    } 
 
    const handleIngredientClick = (ingredient) => { 
        setGptPromptText([...gptPromptText, ingredient.name]); 
    }; 
 
    const generateImage = async (promtText) => { 
        console.log('generate image') 
        const options = { 
            method: "POST", 
            headers: { 
                Authorization: `Bearer ${apikey} `, 
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify({ 
                prompt: promtText, 
                n: 1, 
                size: "512x512", 
            }), 
        }; 
 
        try { 
            const response = await fetch( 
                "https://api.openai.com/v1/images/generations", 
                options 
            ); 
            const data = await response.json(); 
            console.log('data: ', data); 
            setImageUrl(data.data[0].url); 
             
        } catch (error) { 
            console.error(error); 
        } 
    }; 
 
    return ( 
        <div className="flex flex-col items-center"> 
            <div className="flex flex-wrap pt-[120px]"> 
                {ingredientsData.map((ingredient, index) => ( 
                    <Ingredient 
                        key={index} 
                        imageSrc={ingredient.imageSrc} 
                        onClick={() => handleIngredientClick(ingredient)} 
                    /> 
                ))} 
                <div> 
                    <h3></h3> 
                    <ul> 
                        {gptPromptText.map((ingredient, index) => ( 
                            <li key={index}>{ingredient}</li> 
                        ))} 
                    </ul> 
                </div> 
                <button 
                    onClick={() => generateImage(createPromptText())} 
                    className="px-4 h-[50px] m-4 rounded-2xl bg-blue-400 font-mono" 
                > 
                    Generate Dish 
                </button> 
            </div> 
            <div className="flex w-full"> 
 
            
                <Options setInfoFromOptions={setInfoFromOptions}/> 
                <div> 
                    <p className="font-serif text-lg">Generated image will be here:</p> 
                    <img src={imageUrl} width={200} height={200} className="bg-sky-300 rounded-2xl border-2 border-black w-[300px] h-[390px] mr-10 mb-10" alt="generated image will be pasted here" /> 
 
                </div> 
 
 
            </div> 
            
        </div> 
    ); 
}; 
 
export default Choose;