const AdvancedNewsCard = ({ title, description, content, url, image }) => {
  return (
    <div
      className="card bg-dark text-light mb-2 d-inline-block my-3 mx-3 px-3 py-4"
      style={{ maxWidth: "345px" }}
    >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default AdvancedNewsCard;
