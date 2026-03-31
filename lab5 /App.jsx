app.jsx
import FigureList from "./FigureList.jsx";
function App(){
  return(
    <div>
      <FigureList/>
    </div>
  );
}
export default App;

BasicFigure.jsx
const BasicFigure=({src,caption,onRemove})=>{
return(
    <div className="image-card">
        <img src={src} alt="Gallery"/>
        <button onClick={onRemove}>Remove</button>
    </div>
);
};
export default BasicFigure;

FigureList.jsx
import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css"; // Import CSS for styling

const initialImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    caption: "Image 2",
  },
  {
    src: "https://th.bing.com/th/id/OIP.nKc0BH_t6LAViz3N2SedfAHaE7?w=247&h=180&c=7&r=0&o=7&cb=defcache2&pid=1.7&rm=3&defcache=1",
    caption: "Image 3",
  },
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/400/300?random=${randomId}`,
      caption: `Image ${images.length + 1}`,
    };
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>

      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure
            key={index}
            src={image.src}
            caption={image.caption}
            onRemove={() => removeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;

figurelist.css
.container { 
text-align: center; 
padding: 20px; 
} 
.buttons { 
margin-bottom: 20px; } 
button { 
margin: 5px; 
padding: 10px 15px; 
font-size: 16px; 
border: none; 
cursor: pointer; 
background-color: green; color: white;
border-radius: 5px; 
} 
button:hover { 
background-color: darkgreen; 
} 
.gallery { 
display: flex; 
flex-wrap: wrap; 
justify-content: center; 
gap: 15px; 
}
