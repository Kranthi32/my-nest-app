
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
 
export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  totalTickets: number;

  @IsNotEmpty()
  @IsNumber()
  bookedTickets: number;

  @IsOptional()
  @IsNumber()
  discountPercent?: number;

  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;
}
