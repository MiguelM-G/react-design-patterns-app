import React from "react";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.06 - HomePage 
 * - Features: 
 * 
 *     --> Adding 'category' and each list of topics
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { patternCard } = usePatternsAppContext()
    console.log({patternCard});

    const category_1 = patternCard[0].category;
    const category_2 = patternCard[9].category;
    const category_3 = patternCard[14].category;
    const category_4 = patternCard[17].category;
    const category_5 = patternCard[18].category;
    const category_6 = patternCard[26].category;

    return(
        <>
            <div className="m-8 p-8">
                <h2>{category_1}</h2>
                <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                    {patternCard.filter((patternString) => patternString.category.includes('Core Concepts')).map((Card) => {

                        const { id, pattern } = Card
                        return(
                            <ul key={id}>
                                <li className="m-2">
                                <div className="bg-gray-400 p-4 flex
                                        m-4
                                        justify-center items-center
                                        shadow-md border
                                        border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                                </li>
                            </ul>
                        )
                    })}
                    
                </div>
            </div>

            <div className="m-8 p-8">
            <h2>{category_2}</h2>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Design System')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>
        
        <div className="m-8 p-8">
            <h2>{category_3}</h2>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Performance')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <h2>{category_4}</h2>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Practices')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <h2>{category_5}</h2>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Advanced TypeScript')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <h2>{category_6}</h2>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('React Router')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>        
        
        </>
        
    )
}

export default HomePage;