import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    const newItem = await prisma.item.create({
      data: {
        name,
      },
    });
    res.status(201).json(newItem);
  }
}
