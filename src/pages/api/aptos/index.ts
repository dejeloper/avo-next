import { NextApiRequest, NextApiResponse } from 'next'

const index = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json({ message: "Obtener" });

    case 'POST':
      return res.status(201).json({ message: "Crear" });

    default:
      return res.status(400).json({ Error: "Metodo inválido" });
  }
}

export default index;