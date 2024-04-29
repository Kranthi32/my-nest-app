
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './create-movie.dto';
import { Movie } from './entity/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findById(id);
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.moviesService.delete(id);
  }

  @Get('dashboard-data')
  async getDashboardData() {
    const totalBookings = await this.moviesService.getTotalBookings();
    const totalMovies = await this.moviesService.getTotalMovies();
    return { totalBookings, totalMovies };
  }
}
