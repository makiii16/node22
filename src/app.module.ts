import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [UserModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: '194.249.251.33',
      port: 5432,
      username: 'sum2201',
      password: 'Univ3s3+100',
      database: 'node22-marta',
          autoLoadEntities: true,
          entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
