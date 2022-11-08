import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useReducer } from 'react';

const About = () => {
  const [nfts, setNfts] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener('m-authenticated', async (event) => {
      // Get the data client instance
      const client = event.detail.client;

      // Get the NFTs owned by the currently connected wallet
      // Data client API's can be found here: https://docs.manifold.xyz/v/manifold-for-developers/client-widgets/connect-widget/data-client-apis
      setNfts(await client.getNFTsOfOwner());
      setAuthenticated(true);
    })
    window.addEventListener('m-unauthenticated', async (event) => {
      console.log('m-unauth event: ', event);
      setNfts([]);
      setAuthenticated(false);
    })
  });

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClickForceUpdate() {
    forceUpdate();
    console.log('force update')
  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleClickForceUpdate}>Force Rerender</button>

      <h1>About</h1>
      
      <p>This is the about page. View NFTs in your wallet</p>

      {/* -- Add Connect Widget -- */}
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
      {/* <div dangerouslySetInnerHTML={{ 
        __html: 
        "<div \
            data-widget='m-connect' \
            data-app-name='dgSig' \
            data-client-id='c6368ddb0a2276fae6abe837bea60cbe6557fb9908e84d0fbcbd95b45f4f3cf6' \
            data-network='1' \
        ></div>"
      }} /> */}
      
      {/* Display NFTs */}
      {authenticated && <h2 className={styles.title}>Your NFTs</h2>}
      <div id="nfts">
        {nfts.map((nft) => {
          return (
            <img key={`${nft.tokenId}-${nft.contractAddress}`} src={nft.image} height={200} width={200}></img>
          )
        })}
      </div>

  </div>
  )
}

export default About;
