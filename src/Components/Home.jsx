import logo from '../assets/logo.jpg'
const Home = () =>{
   return(
    <>
    <img style={{maxWidth: "700px", width : "100%"}} src={logo} alt="Youtube Logo"/>
    <form action="https://www.youtube.com/results">
        <input type="text" name="search_query" required />
        <button type="submit">Search</button>
    </form>
    <p>made by AV</p>
    </>
   );
};


export default Home;