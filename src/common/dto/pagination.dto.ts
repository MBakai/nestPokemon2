
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";
import { number } from "joi";

export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Type( () => number)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type( () => number)
    offset?: number;
}