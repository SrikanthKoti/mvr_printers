import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { loadSiteData } from './data/data.service';

@Controller()
export class AppController {
  @Get()
  index(@Res() res: Response) {
    const site = loadSiteData();
    return res.render('index', { site });
  }
}
