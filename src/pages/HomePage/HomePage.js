import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './HomePage.css';
import { getPhotos } from '../../requests';

const insideStyles = {
  background: 'transparent',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const HomePage = () => {
  const [initialized, setInitialized] = useState(false);
  const [images, setImages] = useState([]);
  const [layers, setLayers] = useState([]);

  const loadImages = async () => {
    const response = await getPhotos();
    setImages(response.data.hits);
  };

  useEffect(() => {
    if (!initialized) {
      loadImages();
      setInitialized(true);
    }
  });

  return (
    <div className='home-page'>
      {images.map((img, i) => {
        return (
          <>
            <Parallax
              blur={0}
              bgImage={img.userImageURL}
              bgImageAlt={img.tags}
              strength={800}
              renderLayer={percentage => (
                <div>
                  <div
                    style={{
                      position: 'aboslute',
                      background: 'white',
                      left: '50%',
                      top: '50%',
                      borderRadius: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: percentage * 300,
                      height: percentage * 300
                    }}
                  />
                </div>
              )}
            >
              <div style={{ height: 500 }}>
                <div style={insideStyles}>{img.tags}</div>
              </div>
            </Parallax>
          </>
        );
      })}
    </div>
  );
};

export default HomePage;
