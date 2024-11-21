

const define=()=>{
    return(
<div className="definitions my-8 mx-5 ">
    <h1 className="h1 text-white text-3xl font-serif ">1.CSR(Client-Side Rendering)</h1>
    <p className="para text-gray-300 text-xl font-sans mt-3"><i><u>Definition: </u></i>The browser downloads a basic HTML file, and JavaScript builds the content dynamically after the page loads.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Use Case:</u></i> Great for highly interactive apps like dashboards.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Example:</u></i> A page is blank at first and then loads content once the JavaScript runs.</p>

    <h1 className="h1 text-white text-3xl font-serif mt-9">2.SSR(Server-Side Rendering)</h1>
    <p className="para text-gray-300 text-xl font-sans mt-3"><i><u>Definition:</u></i> The server generates the complete HTML for the page before sending it to the browser.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Use Case:</u></i> Ideal for SEO and fast initial page loads.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Example:</u></i> When you open a page, you see all the content immediately because it’s pre-rendered on the server.</p>
    
    <h1 className="h1 text-white text-3xl font-serif mt-9">3.SSG(Static Site Generation)</h1>
    <p className="para text-gray-300 text-xl font-sans mt-3"><i><u>Definition:</u></i> HTML is pre-built during the build process and served as static files.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Use Case:</u></i> Best for pages that don’t change often, like blogs or documentation.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Example:</u></i> Content is ready to go as soon as you visit, with no waiting for server processing.</p>

    <h1 className="h1 text-white text-3xl font-serif mt-9">4.ISR(Incremental Static Regeneration)</h1>
    <p className="para text-gray-300 text-xl font-sans mt-3"><i><u>Definition:</u></i> Combines SSG with periodic updates. Pages are pre-built but refreshed at set intervals or when triggered.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Use Case:</u></i> Perfect for semi-static content like product pages that need occasional updates.</p>
    <p className="para text-gray-300 text-xl font-sans"><i><u>Example:</u></i> You visit a product page, and it’s fast because it’s pre-built, but it updates every few minutes with fresh data.</p>
</div>
  )  
}

export default define;