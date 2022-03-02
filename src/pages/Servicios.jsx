import { FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const Servicios = () => {
  const ServiciosData = [
    { path: '/retiro_haberes', servicio: 'Retiro de Haberes' },
    { path: '/prestamos_persona', servicio: 'Préstamos Personales' },
    { path: '/prestamos_vivienda', servicio: 'Préstamos de Vivienda' },
    { path: '/prestamos_vehiculo', servicio: 'Préstamos de Vehículos' },
    { path: '/fondo_especial', servicio: 'Fondo Especial de Programas (FEP)' },
  ];

  return (
    <div className="mt-24 w-full h-[100vh] grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col px-6 md:flex-row gap-2 w-full justify-between bg-hero-pattern items-start">
        <div className="border-2 prose prose-slate prose-p:my-0 prose-headings:my-1 pros-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-full rounded-md bg-slate-50">
          <h3>Servicios que ofrecemos a nuestros Asociados</h3>
          <p>
            A continuación se presentan los diferentes servicios que actualmente
            ofrece CAPRES:
          </p>
          <IconContext.Provider value={{ color: 'gray', size: '16px' }}>
            <ul className="list-none pl-0">
              {ServiciosData.map((servicio, index) => (
                <li key={index}>
                  <Link to={servicio.path} className="no-underline">
                    <span className="inline-flex items-center gap-2">
                      <FaCheck /> {servicio.servicio}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
