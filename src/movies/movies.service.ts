import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entity/movie.entity';
import { CreateMovieDto } from './create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async findById(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return movie;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.moviesRepository.create(createMovieDto);
    return this.moviesRepository.save(movie);
  }

  async update(id: number, updateMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = await this.findById(id);
    Object.assign(movie, updateMovieDto);
    return this.moviesRepository.save(movie);
  }

  async delete(id: number): Promise<void> {
    const movie = await this.findById(id);
    await this.moviesRepository.remove(movie);
  }

  async getTotalBookings(): Promise<number> {
    return 150; 
  }

  async getTotalMovies(): Promise<number> {
    return 30; 
  }
}
