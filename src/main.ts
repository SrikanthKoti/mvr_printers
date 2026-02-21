import { readdirSync, readFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

const handlebars = hbs.handlebars;

handlebars.registerHelper('eq', function (a: unknown, b: unknown) {
  return a === b;
});

function registerPartialsSync(partialsDir: string): void {
  const files = readdirSync(partialsDir);
  for (const file of files) {
    if (!file.endsWith('.hbs')) continue;
    const filepath = join(partialsDir, file);
    const name = file.slice(0, -4);
    const content = readFileSync(filepath, 'utf-8');
    handlebars.registerPartial(name, content);
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewsPath = join(__dirname, '..', 'views');
  const partialsPath = join(viewsPath, 'partials');
  registerPartialsSync(partialsPath);
  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('hbs');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
