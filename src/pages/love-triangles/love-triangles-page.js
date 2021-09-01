import React, { useContext, useState } from "react";
import LoveTrianglesGrid, { ThemeContext } from "../../components/love-triangles/love-triangles-grid";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { Modal } from "react-responsive-modal";

import triangle from './triangle.png'

const items = new Array(81).fill(1).map((_, i) => i + 1);


// Item component.
const Item = React.forwardRef(({onClick}) => {
    // The style concerns only the "dimensions" and "margins" of the items.
    const style = useContext(ThemeContext);
  
    return (
      <div onClick={(e) => !!onClick && onClick(e)} style={style} className={`item`}>
        <div className="item-content" style={{position: 'absolute', top: 0}}>
            <img src={triangle} style={{maxWidth: '100%'}}/>
        </div>
      </div>
    );
  });

export const LoveTrianglesPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    
    return (
        <>
            <Header/>
            <Layout>
                <p>some text or something poetic about meaning ...</p>
                <p>Then medium sized thumbs of the 81 love-triangles, which can then initially click to own page I guess if easiest? Or open modal thing with details</p>
                <p>Each of the 81 will be a different tone - will sample from scenes from Castle in the Sky - and will aim to make the lines gradients, not sure about bgs yet - mebbe dark indigo</p>
                {/* <LoveTrianglesFunction/> */}
                <LoveTrianglesGrid>
                    {items.map(item => (
                       <Item   key={item} onClick={() => setModalOpen(true)} />
                    ))}
                </LoveTrianglesGrid>
                <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                   <video autoPlay loop poster={triangle} style={{maxWidth: '80%', display: 'block', margin: '0 auto'}}> 
                       <source src="movie.mp4" type="video/mp4" />
                       Your browser does not support the video tag.
                   </video>
                </Modal>
            </Layout>
        </>
    )
}
