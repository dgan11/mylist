import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>NextJS Starter</h1>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/campaigns">
                <a>Campaigns</a>
            </Link>
            <div  
                data-widget="m-connect"
                data-app-name="dgSig"
                data-client-id="c6368ddb0a2276fae6abe837bea60cbe6557fb9908e84d0fbcbd95b45f4f3cf6"
                data-network="1"
                //// Optional Button Settings
                // data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
                // data-override-connect-text="Connect" // Text on button
                >  
            </div>
            
        </nav>
    )
}

export default Navbar;