import NewsCard from "./NewsCard";

const News =({dayNews}) => {
    console.log(dayNews);
    return(
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {dayNews.map((dayNews, index) => {
                    return <NewsCard key={index} {...dayNews} />
                })}
            </div>
        </>
    )
}

export default News