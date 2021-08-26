import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
