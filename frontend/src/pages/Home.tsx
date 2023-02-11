const Home = () => {
    return (
        <div className="home-page-div">
            <h1>Welcome to Beers</h1>
            <a href="/list"><button className="home-button">See all beers</button></a>
            <a href="/create"><button className="home-button">Insert a beer</button></a>
        </div>
    )
}
export default Home;