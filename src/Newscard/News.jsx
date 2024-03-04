import NewsCard from "./NewsCard";

const News =({dayNews}) => {
    console.log(dayNews);
    return(
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {dayNews.map((news, index) => {
                    return <NewsCard key={index} {...news} />
                })}
            </div>
        </>
    )
}

export default News