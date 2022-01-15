import { useState } from "react"


export function Tour({id,image,info,price,name, removeTour}) {
    const [readMore, setReadMore] = useState(false);
    return <article className="single-tour">
        <img src={image} alt={name} />

        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">
                    ${price}
                </h4>
            </div>
            <p>
                {
                    readMore?info :
                            `${info.substring(0,200)}...`
                }
                <button onClick={() => {setReadMore(!readMore)}}>
                    {
                        readMore? "Mostrar menos" : "Ler mais"
                    }
                </button>
            </p>

            <button onClick={() => removeTour(id)} className="delete-btn">
                no interested
            </button>
        </footer>
    </article>
}