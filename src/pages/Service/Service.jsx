import { useAuth } from "../../store/auth";

const Service = () => {
  const { ServiceData } = useAuth();

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-6">
      <div className="bg-[#F5F5F5]  p-8 rounded-lg  w-full max-w-6xl mx-auto">
        <h1 data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300" className="text-3xl font-bold  mb-6 playfair-display-cursive text-[#414040]">Our <span className="text-primary">Services
          </span> </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceData &&  ServiceData.map((service, index) => (
            <div data-aos="zoom-in"
            data-aos-once="true"
            data-aos-delay="400" key={index} className="bg-gray-70 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {service.service}
              </h2>
              <p className="text-gray-400 mb-2">{service.description}</p>
              <p className="text-gray-400 mb-2">
                <span className="font-bold text-gray-500">Price:</span>{" "}
                {service.price}
              </p>
              <p className="text-gray-400">
                <span className="font-bold text-gray-500">Provider:</span>{" "}
                {service.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
