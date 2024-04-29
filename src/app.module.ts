import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entity/movie.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Kranthi@2210',
      database: 'movie',
      entities: [Movie],
      synchronize: true,
    }),
    MoviesModule,
  ],
})
export class AppModule {}
