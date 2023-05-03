import {
  serviceContainer,
  serviceItensContainer,
  serviceItem,
} from "./service.css";
import serviceMap from "./serviceMap";

export default function Service() {
  return (
    <section className={serviceContainer}>
      <article>
        <h1>Porque a Insetex é a melhor no combate de pragas?</h1>
        <div className={serviceItensContainer}>
          {serviceMap.map((it, i) => {
            return (
              <article key={i} className={serviceItem}>
                {it.svg}
                <h2>{it.title}</h2>
                <p>{it.description}</p>
              </article>
            );
          })}
        </div>
      </article>
    </section>
  );
}
