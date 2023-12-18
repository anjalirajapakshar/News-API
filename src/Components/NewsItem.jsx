import image from '../assets/news.jpg'

const NewsItem = ({title,description,src,url}) => {
    return(
        // <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",maxHeight:"500px"}}>
        //     <img src={src?src:image} style={{height:"200px" , width: "328px"}} className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h5 className="card-title">{title.slice(0,50)}</h5>
        //             <p className="card-text">{description?description.slice(0,90):"News: a dynamic tapestry woven from the threads of current events,where conversations that ripple through society."}</p>
        //             <a href={url} className="btn btn-primary">Read More...</a>
        //         </div>
        // </div>

        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", maxHeight: "500px", minHeight: "400px", overflow: "hidden" }}>
            <img src={src ? src : image} style={{ height: "200px", width: "328px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ maxHeight: "calc(500px - 200px)" }}>
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical" }}>
                    {description ? description.slice(0, 90) : "News: a dynamic tapestry woven from the threads of current events,where conversations that ripple through society."}
                </p>
                <a href={url} className="btn btn-primary">Read More...</a>
            </div>
        </div>


    )
}

export default NewsItem;