import Image, { StaticImageData } from "next/image";
import {
  layoutCotnainer,
  serviceDetail,
  serviceDetailContainer,
  serviceItem,
} from "./layout.css";

type Item = {
  title: string;
  describe: string;
  img: StaticImageData;
  imgAlt: string;
  itemDetail: {
    icon: JSX.Element;
    title: string;
    describe: string;
  }[];
};

export default function Layout({ serviceItemMap }: { serviceItemMap: Item }) {
  return (
    <div className={layoutCotnainer}>
      <div className={serviceItem}>
        <article>
          <h1>{serviceItemMap.title}</h1>
          <p>{serviceItemMap.describe}</p>
        </article>
        <figure>
          <Image src={serviceItemMap.img} alt={serviceItemMap.imgAlt} />
        </figure>
      </div>
      <div className={serviceDetail}>
        <h1>Metódos</h1>
        <div className={serviceDetailContainer}>
          {serviceItemMap.itemDetail.map((it, i) => {
            return (
              <article key={i}>
                {it.icon}
                <h2>{it.title}</h2>
                <p>{it.describe}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
