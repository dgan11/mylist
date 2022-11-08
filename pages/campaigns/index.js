const Campaigns = () => {
    return (
        <div>
            <h1>Campaigns</h1>
            {/* <div  
                data-widget="m-connect"
                data-app-name="dgSig"
                data-client-id="c6368ddb0a2276fae6abe837bea60cbe6557fb9908e84d0fbcbd95b45f4f3cf6"
                data-network="1"

                //// Optional Button Settings
                // data-fallback-provider={process.env.DATA_FALLBACK_PROVIDER}
                data-override-connect-text="Ligma" // Text on button
            >  
            </div> */}
            {/* <div
                data-widget="m-layout-complete-listing"
                data-id="444"
                data-network="1"
            ></div> */}

            <div dangerouslySetInnerHTML={{ 
                __html: 
                "<div \
                    data-widget='m-connect' \
                    data-app-name='dgSig' \
                    data-client-id='c6368ddb0a2276fae6abe837bea60cbe6557fb9908e84d0fbcbd95b45f4f3cf6' \
                    data-network='1' \
                ></div>"
            }} />

            <div dangerouslySetInnerHTML={{ 
                __html: 
                    "<div \
                        data-widget='m-layout-complete-listing' \
                        data-id='144' \
                        data-network='1' \
                    ></div>"
            }} />
        </div>
    )
}

export default Campaigns;