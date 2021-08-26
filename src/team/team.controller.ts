import { Body, Controller, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamRO } from './interface/team.interface';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/create')
  async createTeam(@Body() body: CreateTeamDto): Promise<TeamRO> {
    return await this.teamService.create(body);
  }
}
