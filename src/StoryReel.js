import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.telez.fr/content/uploads/2020/07/le-gendarme-de-saint-tropez-1280x720.jpg"
        profileSrc="https://i.pinimg.com/originals/65/ef/57/65ef572cfda754e30c233bdcfff3a703.jpg"
        title="Cruchot"
      />
      <Story
        image="https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/05/7a/la-gendarmerie.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiM4ePBNQjxDmsVROnqncO_EcOQipwp0ecGA&usqp=CAU"
        title="Adjudant Chef Gerber"
      />
      <Story
        image="https://www.toutelatele.com/IMG/arton118693.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI5l3M17utsvC-3FjCF1euopQdE4yAEdeQrg&usqp=CAU"
        title="Fougasse"
      />
      <Story
        image="https://www.rts.ch/2020/03/16/14/22/10925069.image?w=640&h=640"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlVNkZhZwUwQSsj-c96kzvz13Qab1rx1oTrQ&usqp=CAU"
        title="Merlot"
      />
    </div>
  );
}

export default StoryReel;
