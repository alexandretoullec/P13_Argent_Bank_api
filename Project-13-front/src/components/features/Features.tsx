import { useSelector } from "react-redux";

const Features = () => {
  const features = useSelector((state) => state.features);

  return (
    <section className="features">
      {features.map((feature) => {
        return (
          <div className="feature-item" key={feature.id}>
            <img
              src={feature.logo}
              alt={feature.alt}
              className="feature-icon"
            />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>T{feature.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
