import Link from "next/link"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oops page not found</h1>
            <p> Go back to the <Link href="/"><a>home page</a></Link></p>
        </div>
    )
}
export default NotFound;