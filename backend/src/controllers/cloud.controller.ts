// controllers/cloud.controller.ts
import { Request, Response } from 'express';
import { prisma } from '../prisma';
export const createCloud = async (req: Request, res: Response) => {
  try {
    const { image, answer, filter } = req.body;
    const cloud = await prisma.cloud.create({
      data: {
        image,
        answer,
        filter,
        //@ts-ignore
        userId: req.user?.id ?? '', // probleme de merde
      },
    });
    res.json(cloud);
    console.log('createCloud');

  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création' });
  }
};

export const getAllClouds = async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const clouds = await prisma.cloud.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(clouds);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la récupération' });
  }
};

export const getCloudById = async (req: Request, res: Response) => {
  try {
    console.log('getCloudById');
    console.log(req.params.id);
    const cloud = await prisma.cloud.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json(cloud);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la récupération' });
  }
};