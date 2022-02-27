import Logo from '../assets/images/capres.jpg';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';

const Login = () => {
  return (
    <div className=" flex w-full h-screen bg-gray-100 justify-center items-center">
      <div className=" flex flex-col min-w-full items-center">
        <div className="-mt-0 md:mt-auto">
          <img src={Logo} alt="Logo Capres" className="h-20 md:h-auto w-auto" />
        </div>
        <div className="text-gray-700 pt-8 text-2xl md:text-4xl font-bold pb-10 text-heading ">
          Log in
        </div>
        <div className="-mt-8">
          <span className="text-sm">
            No tienes una cuenta?{' '}
            <Link to="/registro" className="text-blue-600 font-medium">
              Registrate
            </Link>
          </span>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form
              className="mb-0 space-y-6"
              action="https://youtube.com"
              method="post"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    required
                    className="w-full border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
              </div>
              <div>
                <Button width="full" font_weight="semibold" type="submit">
                  <span className="text-sm">Iniciar Sesión</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
