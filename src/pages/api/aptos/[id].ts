import { NextApiRequest, NextApiResponse } from "next";

const busqueda = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json({ message: "Obtener Apartamento" });
    case 'PUT':
      return res.status(200).json({ message: "Actualizar Apartamento" });
    case 'DELETE':
      return res.status(200).json({ message: "Eliminar Apartamento" });
    default:
      return res.status(400).json({ Error: "Metodo inválido" });
  }
}

export default busqueda;