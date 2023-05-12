import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {title, img, price, _id} =service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="font-bold text-orange-700">price: {price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;